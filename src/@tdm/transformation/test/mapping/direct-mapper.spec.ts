import * as deepEqual from 'deep-equal';

import { directMapper } from '@tdm/transformation';
import { targetStore } from '@tdm/transformation/ext';
import { TargetMetaModifier } from '@tdm/transformation/testing';


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

describe('@tdm/transformation', () => {
  describe('DirectMapper', () => {

    const basic = require('./payloads/basic.json');
    const basicColl = require('./payloads/basic-collection.json');
    const included = require('./payloads/included.json');

    const articleModifier = TargetMetaModifier.create(Article);
    const authorModifier = TargetMetaModifier.create(Author);
    const commentModifier = TargetMetaModifier.create(Comment);

    describe('DESERIALIZE', () => {
      beforeEach(() => {
        articleModifier.clear();
        authorModifier.clear();
        commentModifier.clear();
      });

      it('should deserialize a basic document', () => {
        articleModifier
          .setName('articles')
          .setIdentity('id')
          .props('id', 'title');


        const res = targetStore.deserialize(directMapper.deserializer(basic, Article));

        expect(res instanceof Article).toBe(true);
        Object.keys(basic).forEach(k => {
          expect(res[k]).toEqual(basic[k]);
        });
      });


      it('should exclude properties decorated with exclude', () => {
        articleModifier
          .setName('articles')
          .setIdentity('id')
          .props('id', 'title')
          .exclude('category');


        const res: Article = targetStore.deserialize(directMapper.deserializer(basic, Article)) as any;

        expect(res instanceof Article).toBe(true);
        expect(res.id).toEqual(basic.id);
        expect(res.title).toEqual(basic.title);
        expect(res.category).toBeUndefined();
      });

      it('should alias properties', () => {
        articleModifier
          .setName('articles')
          .setIdentity('id')
          .props('id', 'title')
          .prop('myCat' as any, {alias: 'category'});


        const res: Article = targetStore.deserialize(directMapper.deserializer(basic, Article)) as any;

        expect(res instanceof Article).toBe(true);
        expect(res.id).toEqual(basic.id);
        expect(res.title).toEqual(basic.title);
        expect(res.category).toBeUndefined();
        expect(res['myCat']).toEqual(basic.category);
      });

      it('should set the id', () => {
        articleModifier
          .setName('articles')
          .setIdentity('myId' as any)
          .props('myId' as any, 'title');

        const newBasic = Object.assign({}, basic);
        newBasic.myId = basic.id;

        const res: Article = targetStore.deserialize(directMapper.deserializer(newBasic, Article)) as any;

        expect(res instanceof Article).toBe(true);
        expect(res.title).toEqual(basic.title);
        expect(res.category).toEqual(basic.category);
        expect(res['myId']).toEqual(basic.id);
      });

      it('should set the aliased id', () => {
        articleModifier
          .setName('articles')
          .setIdentity('myId' as any)
          .prop('myId' as any, {alias: 'id'})
          .prop('title');


        const res: Article = targetStore.deserialize(directMapper.deserializer(basic, Article)) as any;
        expect(res instanceof Article).toBe(true);
        expect(res.id).toBeUndefined();
        expect(res.title).toEqual(basic.title);
        expect(res.category).toEqual(basic.category);
        expect(res['myId']).toEqual(basic.id);

      });

      it('should only include decorated properties in exclusive mode', () => {
        articleModifier
          .setName('articles')
          .setIdentity('id')
          .classProp('transformStrategy', 'exclusive')
          .props('id', 'title');


        const res: Article = targetStore.deserialize(directMapper.deserializer(basic, Article)) as any;

        expect(res instanceof Article).toBe(true);
        expect(res.id).toEqual(basic.id);
        expect(res.title).toEqual(basic.title);
        expect(res.category).toBeUndefined();
      });

      it('should deserialize a basic collection document', () => {
        articleModifier
          .setName('articles')
          .setIdentity('id')
          .props('id', 'title');


        const resArr: any[] = targetStore.deserialize(directMapper.deserializer(basicColl, Article)) as any;

        expect(Array.isArray(resArr)).toBe(true);
        expect(resArr.length).toBe(basicColl.length);
        resArr.forEach((res, i) => {
          const expectedRes = basicColl[i];
          expect(res instanceof Article).toBe(true);
          Object.keys(expectedRes)
            .forEach(k => expect(res[k]).toEqual(expectedRes[k]));
        });

      });

      it('should exclude properties decorated with exclude from collection items', () => {
        articleModifier
          .setName('articles')
          .setIdentity('id')
          .props('id', 'title')
          .exclude('category');


        const resArr: any[] = targetStore.deserialize(directMapper.deserializer(basicColl, Article)) as any;

        expect(Array.isArray(resArr)).toBe(true);
        expect(resArr.length).toBe(basicColl.length);
        resArr.forEach((res, i) => {
          const expectedRes = basicColl[i];
          expect(res instanceof Article).toBe(true);
          expect(res.id).toEqual(expectedRes.id);
          expect(res.title).toEqual(expectedRes.title);
          expect(res.category).toBeUndefined();
        });

      });

      it('should deserialize an included resources', () => {
        articleModifier.setName('articles').setIdentity('id').props('id', 'title', 'category')
          .prop('comments', {typeGetter: () => Comment}, Array).relation('comments')
          .prop('author', Author).relation('author');

        authorModifier.setName('people').setIdentity('id').props('id', 'firstName', 'lastName');
        commentModifier.setName('comments').setIdentity('id').props('id', 'body')
          .prop('author', Author).relation('author', {foreignKey: 'author_id'});

        const res: Article = targetStore.deserialize(directMapper.deserializer(included, Article)) as any;

        expect(res instanceof Article).toBe(true);
        expect(res.id).toEqual(included.id);
        expect(res.title).toEqual(included.title);
        expect(res.category).toEqual(included.category);
        expect(res.freestyle).toBeTruthy();
        expect(res.freestyle.free).toBe('style');
        expect(res.freestyle.constructor.name).toBe('Object');

        const author = res.author;
        expect(author instanceof Author).toBe(true);
        expect(author.id).toEqual(included.author.id);
        expect(author.firstName).toEqual(included.author.firstName);
        expect(author.lastName).toEqual(included.author.lastName);

        const comments = res.comments;
        expect(Array.isArray(comments)).toBe(true);
        expect(comments.length).toBe(included.comments.length);
        comments.forEach((comment, i) => {
          const expectedComment = included.comments[i];
          expect(comment instanceof Comment).toBe(true);
          expect(comment.id).toEqual(expectedComment.id);
          expect(comment.body).toEqual(expectedComment.body);
          expect(comment['author_id']).toBeUndefined();
        });
        expect(comments[0].author instanceof Author).toBe(true);
        expect(comments[0].author.id).toBe(included.comments[0].author_id);
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
          .setName('articles')
          .setIdentity('id')
          .props('id', 'title');


        const resource = targetStore.deserialize(directMapper.deserializer(basic, Article));
        const ser = targetStore.serialize(Article, directMapper.serializer(resource));
        expect(deepEqual(ser, basic)).toBe(true);

      });

      it('should exclude properties decorated with exclude', () => {
        articleModifier
          .setName('articles')
          .setIdentity('id')
          .props('id', 'title')
          .exclude('category');

        const resource = targetStore.deserialize(directMapper.deserializer(basic, Article));
        const ser = targetStore.serialize(Article, directMapper.serializer(resource));
        expect(deepEqual(ser, basic)).toBe(false);
        ser.category = basic.category;
        expect(deepEqual(ser, basic)).toBe(true);
      });

      it('should alias properties', () => {
        articleModifier
          .setName('articles')
          .setIdentity('id')
          .props('id', 'title')
          .prop('myCat' as any, {alias: 'category'});


        const resource: Article = targetStore.deserialize(directMapper.deserializer(basic, Article)) as any;

        expect(resource instanceof Article).toBe(true);
        expect(resource.category).toBeUndefined();
        expect(resource['myCat']).toEqual(basic.category);

        const ser = targetStore.serialize(Article, directMapper.serializer(resource));
        expect(deepEqual(ser, basic)).toBe(true);

      });

      it('should handle different id name and delete it from output', () => {
        articleModifier
          .setName('articles')
          .setIdentity('myId' as any)
          .prop('myId' as any, {alias: 'id'})
          .prop('title');


        const resource: Article = targetStore.deserialize(directMapper.deserializer(basic, Article)) as any;
        const ser = targetStore.serialize(Article, directMapper.serializer(resource));
        expect(deepEqual(ser, basic)).toBe(true);
      });

      it('should handle different id with alias name and delete it from output', () => {
        articleModifier
          .setName('articles')
          .setIdentity('myId' as any)
          .prop('myId' as any, {alias: 'id'});


        const resource: Article = targetStore.deserialize(directMapper.deserializer(basic, Article)) as any;
        const ser = targetStore.serialize(Article, directMapper.serializer(resource));
        expect(deepEqual(ser, basic)).toBe(true);
      });

      it('should only include decorated properties in exclusive mode', () => {
        articleModifier
          .setName('articles')
          .setIdentity('id')
          .classProp('transformStrategy', 'exclusive')
          .props('id', 'title');


        const resource = targetStore.deserialize(directMapper.deserializer(basic, Article));
        const ser = targetStore.serialize(Article, directMapper.serializer(resource));
        expect(deepEqual(ser, basic)).toBe(false);
        ser.category = basic.category;
        expect(deepEqual(ser, basic)).toBe(true);
      });


      it('should serialize a basic collection document', () => {
        articleModifier
          .setName('articles')
          .setIdentity('id')
          .props('id', 'title');


        const resources: Article[] = targetStore.deserialize(directMapper.deserializer(basicColl, Article)) as any;
        expect(Array.isArray(resources)).toBe(true);

        const ser = targetStore.serialize(Article, directMapper.serializer(resources));
        expect(deepEqual(ser, basicColl)).toBe(true);
      });

      it('should serialize an included resources', () => {
        articleModifier.setName('articles').setIdentity('id').props('id', 'title', 'category')
          .prop('comments', {typeGetter: () => Comment}, Array).relation('comments')
          .prop('author', Author).relation('author');

        authorModifier.setName('people').setIdentity('id').props('id', 'firstName', 'lastName');
        commentModifier.setName('comments').setIdentity('id').props('id', 'body')
          .prop('author', Author).relation('author', {foreignKey: 'author_id'});

        const resource: Article = targetStore.deserialize(directMapper.deserializer(included, Article)) as any;
        const ser = targetStore.serialize(Article, directMapper.serializer(resource));
        expect(deepEqual(ser, included)).toBe(false);

        // original payload included the Author object in full.
        // the mapper can't tell return it, it knows how to accept full objects but it will always
        // return keys.
        expect(deepEqual(ser, Object.assign({}, included, {author: "9"}))).toBe(true);


      });

    });
  });
})
