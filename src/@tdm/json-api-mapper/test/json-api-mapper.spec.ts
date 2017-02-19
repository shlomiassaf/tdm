import { MockResource, MockDeserializer, MockMixin, TargetMetaModifier } from '@tdm/core/testing';
import { targetStore, GlobalResourceMetadata } from '@tdm/core';
import { jsonAPIMapper } from '../src/json-api-mapper';

const localMockDeserializer = new MockDeserializer();

class Article_ {
  id: string;
  title: string;
  category: string;
  freestyle: { free: string, author: Author };
  author: Author;
  comments: Comment[];
}
@MockResource({ endpoint: '/api/articles/:id?', deserializer: () => localMockDeserializer})
class Article extends MockMixin(Article_) { }

class Author_ {
  id: string;
  firstName: string;
  lastName: string;
}
@MockResource({ endpoint: '/api/authors/:id?', deserializer: () => localMockDeserializer})
class Author extends MockMixin(Author_) { }

class Comment_ {
  id: string;
  body: string;
  author: Author;
}
@MockResource({ endpoint: '/api/comments/:id?', deserializer: () => localMockDeserializer})
class Comment extends MockMixin(Comment_) { }

describe('JSONAPIMapper', () => {
  const basic = require('./payloads/basic.json');
  const basicColl = require('./payloads/basic-collection.json');
  const included = require('./payloads/included.json');

  const articleModifier = TargetMetaModifier.create(Article);
  const authorModifier = TargetMetaModifier.create(Author);
  const commentModifier = TargetMetaModifier.create(Comment);

  beforeEach( () => {
    articleModifier.clear();
    authorModifier.clear();
    commentModifier.clear();
  });

  it('should deserialize a basic document', () => {
    articleModifier
      .setName('articles')
      .setIdentity('id')
      .props('id', 'title');


    const res = targetStore.deserialize(Article, jsonAPIMapper.deserializer(basic.payload));

    expect(res instanceof Article).toBe(true);
    Object.keys(basic.expected).forEach( k => {
      expect(res[k]).toEqual(basic.expected[k]);
    });
  });


  it('should exclude properties decorated with exclude', () => {
    articleModifier
      .setName('articles')
      .setIdentity('id')
      .props('id', 'title')
      .exclude('category');


    const res: Article = targetStore.deserialize(Article, jsonAPIMapper.deserializer(basic.payload)) as any;

    expect(res instanceof Article).toBe(true);
    expect(res.id).toEqual(basic.expected.id);
    expect(res.title).toEqual(basic.expected.title);
    expect(res.category).toBeUndefined();
  });

  it('should alias properties', () => {
    articleModifier
      .setName('articles')
      .setIdentity('id')
      .props('id', 'title')
      .prop('myCat', { alias: 'category' });


    const res: Article = targetStore.deserialize(Article, jsonAPIMapper.deserializer(basic.payload)) as any;

    expect(res instanceof Article).toBe(true);
    expect(res.id).toEqual(basic.expected.id);
    expect(res.title).toEqual(basic.expected.title);
    expect(res.category).toBeUndefined();
    expect(res['myCat']).toEqual(basic.expected.category);
  });

  it('should set the id', () => {
    articleModifier
      .setName('articles')
      .setIdentity('myId')
      .props('myId', 'title');


    const res: Article = targetStore.deserialize(Article, jsonAPIMapper.deserializer(basic.payload)) as any;

    expect(res instanceof Article).toBe(true);
    expect(res.title).toEqual(basic.expected.title);
    expect(res.category).toEqual(basic.expected.category);
    expect(res['myId']).toEqual(basic.expected.id);
  });


  it('should only include decorated properties in exclusive mode', () => {
    articleModifier
      .updateResource(new GlobalResourceMetadata({
        name: 'articles',
        transformStrategy: 'exclusive'
      }))
      .setIdentity('id')
      .props('id', 'title');


    const res: Article = targetStore.deserialize(Article, jsonAPIMapper.deserializer(basic.payload)) as any;

    expect(res instanceof Article).toBe(true);
    expect(res.id).toEqual(basic.expected.id);
    expect(res.title).toEqual(basic.expected.title);
    expect(res.category).toBeUndefined();
  });

  it('should deserialize a basic collection document', () => {
    articleModifier
      .setName('articles')
      .setIdentity('id')
      .props('id', 'title');


    const resArr: any[] = targetStore.deserialize(Article, jsonAPIMapper.deserializer(basicColl.payload)) as any;

    expect(Array.isArray(resArr)).toBe(true);
    expect(resArr.length).toBe(basicColl.expected.length);
    resArr.forEach( (res, i) => {
      const expectedRes = basicColl.expected[i];
      expect(res instanceof Article).toBe(true);
      Object.keys(expectedRes)
        .forEach( k => expect(res[k]).toEqual(expectedRes[k]) );
    });

  });

  it('should exclude properties decorated with exclude from collection items', () => {
    articleModifier
      .setName('articles')
      .setIdentity('id')
      .props('id', 'title')
      .exclude('category');


    const resArr: any[] = targetStore.deserialize(Article, jsonAPIMapper.deserializer(basicColl.payload)) as any;

    expect(Array.isArray(resArr)).toBe(true);
    expect(resArr.length).toBe(basicColl.expected.length);
    resArr.forEach( (res, i) => {
      const expectedRes = basicColl.expected[i];
      expect(res instanceof Article).toBe(true);
      expect(res.id).toEqual(expectedRes.id);
      expect(res.title).toEqual(expectedRes.title);
      expect(res.category).toBeUndefined();
    });

  });

  it('should deserialize an included resources', () => {
    articleModifier.setName('articles').setIdentity('id').props('id', 'title', 'category');
    authorModifier.setName('people').setIdentity('id').props('id', 'firstName', 'lastName');
    commentModifier.setName('comments').setIdentity('id').props('id', 'body');


    const res: Article = targetStore.deserialize(Article, jsonAPIMapper.deserializer(included.payload)) as any;

    expect(res instanceof Article).toBe(true);
    expect(res.id).toEqual(included.expected.id);
    expect(res.title).toEqual(included.expected.title);
    expect(res.category).toEqual(included.expected.category);
    expect(res.freestyle).toBeTruthy();
    expect(res.freestyle.free).toBe('style');
    expect(res.freestyle.constructor.name).toBe('Object');

    const author = res.author;
    expect(author instanceof Author).toBe(true);
    expect(author.id).toEqual(included.expected.author.id);
    expect(author.firstName).toEqual(included.expected.author.firstName);
    expect(author.lastName).toEqual(included.expected.author.lastName);

    expect(res.freestyle.author).toBe(author);

    const comments = res.comments;
    expect(Array.isArray(comments)).toBe(true);
    expect(comments.length).toBe(included.expected.comments.length);
    comments.forEach( (comment, i) => {
      const expectedComment = included.expected.comments[i];
      expect(comment instanceof Comment).toBe(true);
      expect(comment.id).toEqual(expectedComment.id);
      expect(comment.body).toEqual(expectedComment.body);
    });
    expect(comments[1].author).toBe(author);
  });
});
