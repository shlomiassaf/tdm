import { TDMCollection } from '@tdm/core';

import { User, Post } from './models';

export const posts = TDMCollection.create(Post);
export const users = TDMCollection.create(User);

let user = new User();
user.id = 1;
user.name = 'Tom Hanks';
user.email = 'th@gmail.com';
user.address = {
  street: 'Some Street',
  city: 'Los Angels',
  zip: 95205,
  state: 'CA',
  nested: {
    nested1: 'nested1',
    nested2: 2,
    nested3: 3
  }
};
user.alias = ['Forest Gump', 'Captain Miller'];
user.movies = [
  {
    name: 'Forest Gump',
    year: 1994
  },
  {
    name: 'Saving Private Ryan',
    year: 1998
  }
];
users.push(user);

user = new User();
user.id = 2;
user.name = 'Brad Pitt';
user.email = 'bp@gmail.com';
users.push(user);

let post = new Post();
post.id = 1;
post.title = 'Title 1';
post.tldr = 'tldr 1';
post.content = 'text 1';
post.level = 3;
post.audience = 'Adult';
post.author = user;

posts.push(post);
