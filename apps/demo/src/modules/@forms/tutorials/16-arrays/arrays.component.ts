import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { DynamicFormRowComponent } from '../5-renderer-container'; /* @tdm-ignore-line */
import { RendererEvent, ChildFormEditRendererEvent, TDMModelForm } from '@tdm/ngx-dynamic-forms';
import { matTabsAnimations, MatTabBodyPositionState } from '@angular/material/tabs';

import { Hero, HeroAddress } from './model';

@Component({
  selector: 'form-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: [ './arrays.component.scss' ],
  animations: [ matTabsAnimations.translateTab ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class ArraysComponent {
  model: Hero;
  code: any = import(/* webpackChunkName: "FormsArraysComponent" */ './__tdm-code__');   /* @tdm-ignore-line */

  external = {
    posMaster: 'center' as MatTabBodyPositionState,
    forms: [] as Array<{
      event: ChildFormEditRendererEvent,
      form: TDMModelForm<any>,
      pos: MatTabBodyPositionState,
    }>,
    current: -1 as number
  };

  constructor() {
    this.model = new Hero();
    this.model.allies = [ 'Thor', 'Captain America' ];
    this.model.address = [
      Object.assign(new HeroAddress(), {
        street: 'Bat Cave Lane',
        city: 'Gotham',
        zip: '9999'
      }),
      Object.assign(new HeroAddress(), {
        street: 'Island Ave`',
        city: 'Themyscira'
      })
    ];
  }

  onRendererEvent(event: RendererEvent): void {
    switch ( event.type ) {
      case 'childFormEdit':
        this.addForm(<any> event);
        break;
      default:
        break;
    }
  }

  cancelForm(tdmForm: TDMModelForm<any>): void {
    tdmForm.reset();
  }

  closeExternalForm(updated: boolean): void {
    const ext = this.external.forms.pop();
    this.external.current--;
    if ( this.external.current === -1 ) {
      this.external.posMaster = 'center';
    } else {
      this.external.forms[ this.external.current ].pos = 'center';
    }
    if ( !updated ) {
      ext.event.reset();
    }
    ext.event.context.item.markAsChanged();
  }

  private addForm(event: ChildFormEditRendererEvent): void {
    const external = {
      event,
      form: event.createTDMModelForm(),
      pos: 'center' as 'center'
    };

    this.external.forms.push(external);
    if ( this.external.current === -1 ) {
      this.external.posMaster = 'left';
    } else {
      this.external.forms[ this.external.current ].pos = 'left';
    }
    this.external.current++;
  }

  /* @tdm-ignore:* */
  static tutorial = {
    id: 'arrays',
    name: 'Arrays'
  };
  /* @tdm-ignore:* */
}
