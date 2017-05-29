import deepEqual from 'deep-equal';

import { targetStore } from '@tdm/core/tdm';
import { TargetMetaModifier } from '@tdm/core/testing';
import { jsonAPIMapper } from '../src/json-api-mapper';

class Article {
  id: string;
  title: string;
  category: string;
  freestyle: { free: string, author: Author };
  author: Author;
  comments: Comment[];
}

class Author {
  id: string;
  firstName: string;
  lastName: string;
}

class Comment {
  id: string;
  body: string;
  author: Author;
}

describe('JSONAPIMapper', () => {

  const basic = require('./payloads/basic.json');
  const basicColl = require('./payloads/basic-collection.json');
  const included = require('./payloads/included.json');

  const articleModifier = TargetMetaModifier.create(Article);
  const authorModifier = TargetMetaModifier.create(Author);
  const commentModifier = TargetMetaModifier.create(Comment);

  describe('DESERIALIZE', () => {
    beforeEach( () => {
      articleModifier.clear();
      authorModifier.clear();
      commentModifier.clear();
    });

    it('should deserialize a basic document', () => {
      articleModifier
        .setModel({ resName: 'articles' })
        .setIdentity('id')
        .props('id', 'title');


      const res = targetStore.deserialize(jsonAPIMapper.deserializer(basic.payload, Article));

      expect(res instanceof Article).toBe(true);
      Object.keys(basic.expected).forEach( k => {
        expect(res[k]).toEqual(basic.expected[k]);
      });
    });


    it('should exclude properties decorated with exclude', () => {
      articleModifier
        .setModel({ resName: 'articles' })
        .setIdentity('id')
        .props('id', 'title')
        .exclude('category');


      const res: Article = targetStore.deserialize(jsonAPIMapper.deserializer(basic.payload, Article)) as any;

      expect(res instanceof Article).toBe(true);
      expect(res.id).toEqual(basic.expected.id);
      expect(res.title).toEqual(basic.expected.title);
      expect(res.category).toBeUndefined();
    });

    it('should alias properties', () => {
      articleModifier
        .setModel({ resName: 'articles' })
        .setIdentity('id')
        .props('id', 'title')
        .prop('myCat' as any, { alias: 'category' });


      const res: Article = targetStore.deserialize(jsonAPIMapper.deserializer(basic.payload, Article)) as any;

      expect(res instanceof Article).toBe(true);
      expect(res.id).toEqual(basic.expected.id);
      expect(res.title).toEqual(basic.expected.title);
      expect(res.category).toBeUndefined();
      expect(res['myCat' as any]).toEqual(basic.expected.category);
    });

    it('should set the id', () => {
      articleModifier
        .setModel({ resName: 'articles' })
        .setIdentity('myId' as any)
        .props('myId' as any, 'title');


      const res: Article = targetStore.deserialize(jsonAPIMapper.deserializer(basic.payload, Article)) as any;

      expect(res instanceof Article).toBe(true);
      expect(res.title).toEqual(basic.expected.title);
      expect(res.category).toEqual(basic.expected.category);
      expect(res['myId' as any]).toEqual(basic.expected.id);
    });

    it('should set the aliased id', () => {
      articleModifier
        .setModel({ resName: 'articles' })
        .setIdentity('myId' as any)
        .prop('myId' as any, { alias: 'id' })
        .prop('title');


      const res: Article = targetStore.deserialize(jsonAPIMapper.deserializer(basic.payload, Article)) as any;
      expect(res instanceof Article).toBe(true);
      expect(res.id).toBeUndefined();
      expect(res.title).toEqual(basic.expected.title);
      expect(res.category).toEqual(basic.expected.category);
      expect(res['myId' as any]).toEqual(basic.expected.id);
    });

    it('should only include decorated properties in exclusive mode', () => {
      articleModifier
        .setModel({ resName: 'articles', transformStrategy: 'exclusive' })
        .setIdentity('id')
        .props('id', 'title');


      const res: Article = targetStore.deserialize(jsonAPIMapper.deserializer(basic.payload, Article)) as any;

      expect(res instanceof Article).toBe(true);
      expect(res.id).toEqual(basic.expected.id);
      expect(res.title).toEqual(basic.expected.title);
      expect(res.category).toBeUndefined();
    });

    it('should deserialize a basic collection document', () => {
      articleModifier
        .setModel({ resName: 'articles' })
        .setIdentity('id')
        .props('id', 'title');


      const resArr: any[] = targetStore.deserialize(jsonAPIMapper.deserializer(basicColl.payload, Article)) as any;

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
        .setModel({ resName: 'articles' })
        .setIdentity('id')
        .props('id', 'title')
        .exclude('category');


      const resArr: any[] = targetStore.deserialize(jsonAPIMapper.deserializer(basicColl.payload, Article)) as any;

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
      articleModifier.setModel({ resName: 'articles' }).setIdentity('id').props('id', 'title', 'category');
      authorModifier.setModel({ resName: 'people' }).setIdentity('id').props('id', 'firstName', 'lastName');
      commentModifier.setModel({ resName: 'comments' }).setIdentity('id').props('id', 'body');


      const res: Article = targetStore.deserialize(jsonAPIMapper.deserializer(included.payload, Article)) as any;

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

    it('should deserialize an included resources with explicit relations', () => {
      authorModifier.setModel({ resName: 'people' }).setIdentity('id').props('id', 'firstName', 'lastName');

      articleModifier.setModel({ resName: 'articles' }).setIdentity('id').props('id', 'title', 'category')
        .prop('comments', { typeGetter: () => Comment }, Array).relation('comments')
        .prop('author', Author).relation('author');

      commentModifier.setModel({ resName: 'comments' }).setIdentity('id').props('id', 'body')
        .prop('author', Author).relation('author');

      const res: Article = targetStore.deserialize(jsonAPIMapper.deserializer(included.payload, Article)) as any;

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


  describe('SERIALIZE', () => {
    beforeEach(() => {
      articleModifier.clear();
      authorModifier.clear();
      commentModifier.clear();
    });


    it('should serialize a basic document', () => {
      articleModifier
        .setModel({ resName: 'articles' })
        .setIdentity('id')
        .props('id', 'title');


      const resource = targetStore.deserialize(jsonAPIMapper.deserializer(basic.payload, Article));
      const ser = targetStore.serialize(Article, jsonAPIMapper.serializer(resource));
      expect(deepEqual(ser, basic.payload)).toBe(true);

    });

    it('should exclude properties decorated with exclude', () => {
      articleModifier
        .setModel({ resName: 'articles' })
        .setIdentity('id')
        .props('id', 'title')
        .exclude('category');

      const resource = targetStore.deserialize(jsonAPIMapper.deserializer(basic.payload, Article));
      const ser = targetStore.serialize(Article, jsonAPIMapper.serializer(resource));
      expect(deepEqual(ser, basic.payload)).toBe(false);
      ser.data.attributes.category = basic.payload.data.attributes.category;
      expect(deepEqual(ser, basic.payload)).toBe(true);
    });

    it('should alias properties', () => {
      articleModifier
        .setModel({ resName: 'articles' })
        .setIdentity('id')
        .props('id', 'title')
        .prop('myCat' as any, { alias: 'category' });


      const resource: Article = targetStore.deserialize(jsonAPIMapper.deserializer(basic.payload, Article)) as any;

      expect(resource instanceof Article).toBe(true);
      expect(resource.category).toBeUndefined();
      expect(resource['myCat' as any]).toEqual(basic.expected.category);

      const ser = targetStore.serialize(Article, jsonAPIMapper.serializer(resource));
      expect(deepEqual(ser, basic.payload)).toBe(true);

    });

    it('should handle different id name and delete it from output', () => {
      articleModifier
        .setModel({ resName: 'articles' })
        .setIdentity('myId' as any)
        .props('myId' as any, 'title');


      const resource: Article = targetStore.deserialize(jsonAPIMapper.deserializer(basic.payload, Article)) as any;
      const ser = targetStore.serialize(Article, jsonAPIMapper.serializer(resource));
      expect(deepEqual(ser, basic.payload)).toBe(true);
    });

    it('should handle different id with alias name and delete it from output', () => {
      articleModifier
        .setModel({ resName: 'articles' })
        .setIdentity('myId' as any)
        .prop('myId' as any, { alias: 'id' })
        .prop('title');

      const resource: Article = targetStore.deserialize(jsonAPIMapper.deserializer(basic.payload, Article)) as any;
      const ser = targetStore.serialize(Article, jsonAPIMapper.serializer(resource));
      expect(deepEqual(ser, basic.payload)).toBe(true);
    });

    it('should only include decorated properties in exclusive mode', () => {
      articleModifier
        .setModel({ resName: 'articles', transformStrategy: 'exclusive' })
        .setIdentity('id')
        .props('id', 'title');


      const resource = targetStore.deserialize(jsonAPIMapper.deserializer(basic.payload, Article));
      const ser = targetStore.serialize(Article, jsonAPIMapper.serializer(resource));
      expect(deepEqual(ser, basic.payload)).toBe(false);
      ser.data.attributes.category = basic.payload.data.attributes.category;
      expect(deepEqual(ser, basic.payload)).toBe(true);
    });


    it('should serialize a basic collection document', () => {
      articleModifier
        .setModel({ resName: 'articles' })
        .setIdentity('id')
        .props('id', 'title');


      const resources: Article[] = targetStore.deserialize(jsonAPIMapper.deserializer(basicColl.payload, Article)) as any;
      expect(Array.isArray(resources)).toBe(true);

      const ser = targetStore.serialize(Article, jsonAPIMapper.serializer(resources));
      expect(deepEqual(ser, basicColl.payload)).toBe(true);
    });

    it('should serialize an included resources', () => {
      articleModifier
        .setModel({ resName: 'articles', skip: true })
        .setIdentity('id')
        .props('id', 'title', 'category')
        .prop('comments', { type: () => Comment }, Array)
        .relation('comments')
        .prop('author', Author).relation('author')
        .build();

      authorModifier
        .setModel({ resName: 'people' })
        .setIdentity('id')
        .props('id', 'firstName', 'lastName');

      commentModifier
        .setModel({ resName: 'comments', skip: true  })
        .setIdentity('id').props('id', 'body')
        .prop('author', Author)
        .relation('author')
        .build();



      const resource: Article = targetStore.deserialize(jsonAPIMapper.deserializer(included.payload, Article)) as any;
      expect(resource instanceof Article).toBe(true);

      const ser = targetStore.serialize(Article, jsonAPIMapper.serializer(resource));
      expect(deepEqual(ser, included.payload)).toBe(false);

      // check that the serialization for plain objects is working and not just setting ref.
      expect(ser.data.attributes.freestyle.$rc).toBeUndefined();

      // The payload has a "freestyle" object with defined relationship and an included freestyle resource.
      // With Deserialization the deserializer is smart enough to convert it to a plain object even although there
      // is not schema.
      // With Serialization this is not the case, since "freestyle" is an object literal (plain object)
      // and not a resource with schema the serializer doesn't know about the relationship so
      // it doesn't serialize it to a separate relationship and included object like the original payload.
      // It will set freestyle as an attribute with complex object.
      // To make the test pass this is the fix:
      delete ser.data.attributes.freestyle;
      ser.data.relationships.freestyle = included.payload.data.relationships.freestyle;
      ser.included.unshift(included.payload.included[0]);

      expect(deepEqual(ser, included.payload)).toBe(true);
    });


  });

});
