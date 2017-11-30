import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';

import { TDMCollection } from '@tdm/core';
import { BeforeRenderEventHandler } from '@tdm/ngx-dynamic-forms';

import { DataSourceContainer } from '@shared';
import { DynamicFormContainerComponent } from './dynamic-form-container/dynamic-form-container.component';
import { User, Post } from '../models';
import { posts, users } from '../db';

@Component({
  selector: 'forms-demo-page',
  styleUrls: [ './forms-demo-page.component.css' ],
  templateUrl: './forms-demo-page.component.html'
})
export class FormsDemoPageComponent {
  hotBind: boolean;

  postColumns = [
    '$$EDIT',
    'id',
    'title',
    'tldr',
    'content',
    'author'
  ];

  userColumns = [
    'id',
    'name',
    'email'
  ];

  posts: TDMCollection<Post> = posts;
  users: TDMCollection<User> = users;

  postsDatatSource = new DataSourceContainer(this.posts);
  usersDatatSource = new DataSourceContainer(this.users);

  controlState = { disabled: ['id'], hidden: ['title'] };

  @ViewChild('postTemplate') postTemplate: TemplateRef<any>;
  constructor(public dialog: MatDialog) {}

  addUser() {
    const newUser = new User();
    this.dialog.open(DynamicFormContainerComponent, { data: { instance: newUser } })
      .afterClosed().subscribe( value => {
        if (value === true) {
          this.usersDatatSource.updateSource([newUser], true);
        }
    } );
  }

  onEdit(element: any): void {
    this.dialog.open(this.postTemplate, { data: element })
      .afterClosed().subscribe( value => {  });
  }

  handleControlState(stateKey: 'disabled' | 'hidden', name: string): void {
    setTimeout(() => {
      const idx = this.controlState[stateKey].indexOf(name);
      if (idx === -1) {
        this.controlState[stateKey].push(name);
      } else {
        this.controlState[stateKey].splice(idx, 1);
      }
    });
  }

  beforeRenderPost(event: BeforeRenderEventHandler) {
    if (event.instruction.name === 'author') {
      let resolve, p = new Promise<void>( res => { resolve = res });

      // faking async server call
      event.async(p);

      event.instruction.type = 'select';
      event.instruction.data = { selections: this.users.map( u => ({ value: u, label: u.name}) ) };

      setTimeout(() => resolve(), 1000);
    }

  }
}
