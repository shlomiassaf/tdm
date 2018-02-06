import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { TDMCollection } from '@tdm/core';
import { BeforeRenderEventHandler, TdmFormChanges } from '@tdm/ngx-dynamic-forms';

import { DataSourceContainer } from '@shared';
import { DynamicFormContainerComponent } from './dynamic-form-container/dynamic-form-container.component';
import { User, Post } from '../../models';
import { posts, users } from '../../db';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'temp-example',
  styleUrls: [ './temp-example.component.css' ],
  templateUrl: './temp-example.component.html',
  animations: [
    trigger('detailExpand', [
      state('void', style({height: '0px', minHeight: '0', visibility: 'hidden'})),
      state('*', style({height: '*', visibility: 'visible'})),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ],
})
export class TempExampleComponent {
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
    'edit',
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
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) {}

  addEditUser(user?: User) {
    let isNew = false;
    if (!user) {
      user = new User();
      isNew = true;
    }
    this.dialog.open(DynamicFormContainerComponent, { data: { instance: user } })
      .afterClosed().subscribe( value => {
        if (value === true && isNew) {
          this.usersDatatSource.updateSource([user], true);
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
    if ('author' in event.instructions) {
      let resolve, p = new Promise<void>( res => { resolve = res });

      // faking async server call
      event.async(p);

      event.instructions.author.vType = 'select';
      event.instructions.author.data = { options: this.users.map( u => ({ value: u, label: u.name}) ) };

      setTimeout(() => resolve(), 1000);
    }

  }

  valueChanges(event: TdmFormChanges): void {
    const message = event.map( change => `Key "${change.key}" changed`).join('\n');
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
