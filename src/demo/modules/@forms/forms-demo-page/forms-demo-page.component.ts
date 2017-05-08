import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MdDialog } from '@angular/material';

import { TDMCollection } from '@tdm/core';
import { RenderInstruction, BeforeRenderEventHandler } from '@tdm/angular-forms-mapper';

import { DynamicFormContainerComponent } from './dynamic-form-container/dynamic-form-container.component';
import { User, Post } from '../models';
import { posts, users } from '../db';



@Component({
  selector: 'forms-demo-page',
  styleUrls: [ './forms-demo-page.component.css' ],
  templateUrl: './forms-demo-page.component.html'
})
export class FormsDemoPageComponent {
  postColumns: any;
  userColumns: any;

  posts: TDMCollection<Post> = posts;
  users: TDMCollection<User> = users;

  @ViewChild('postTemplate') postTemplate: TemplateRef<any>;
  constructor(public dialog: MdDialog) {}

  addUser() {
    const newUser = new User();
    this.dialog.open(DynamicFormContainerComponent, { data: { instance: newUser } })
  }

  addPost() {
    this.dialog.open(this.postTemplate)
      .afterClosed().subscribe( value => {
    });
  }

  ngOnInit() {
    this.postColumns = [
      { prop: 'id' },
      { prop: 'title' },
      { prop: 'tldr' },
      { prop: 'content' },
      { prop: 'author' }
    ];
    this.userColumns = [
      { prop: 'id' },
      { prop: 'name' },
      { prop: 'email' }
    ];
  }

  beforeRenderPost(event: BeforeRenderEventHandler) {
    let resolve, p = new Promise<void>( res => { resolve = res });

    // event.async(p);

    if (event.instruction.name === 'author') {
      event.instruction.type = 'select';
      event.instruction.selections = this.users.map( u => ({ value: u, label: u.name}) );
    }

    // setTimeout(() => resolve(), 1000);
  }
}