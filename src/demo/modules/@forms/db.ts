import { TDMCollection } from '@tdm/core';

import { User, Post } from './models';

export const posts = TDMCollection.create(Post);
export const users = TDMCollection.create(User);

let user = new User();
user.id = 1;
user.name = 'Tom Hanks';
user.email = 'th@gmail.com';
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