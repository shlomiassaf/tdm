/* @tdm-example:DAO */
/* @tdm-example:AR */
import { Component } from '@angular/core';
import { NgDAO } from '@tdm/ngx-http-client'; /* @tdm-ignore-line: AR */
/* @tdm-ignore: AR */
/* @tdm-ignore: DAO */
/* @tdm-example:MODEL */
export class UIDeveloper {
  id: number;

  name: string;

  framework: 'angular' | 'react' | 'vue' | 'other';
  $save: () => Promise<UIDeveloper>;  static findById: (id: any) => Promise<UIDeveloper>; /* @tdm-ignore-line */
}
/* @tdm-example:MODEL */
/* @tdm-ignore: DAO */

// @Component({ /* ... */ })
export class DaoExampleComponent {
  constructor(private ngDao: NgDAO) { }

  async updateUiDev(): Promise<void> {
    let uiDev = await this.ngDao.get(UIDeveloper).findById(15);
    uiDev.framework = 'angular';
    await this.ngDao.get(UIDeveloper).update(uiDev);
  }
}
/* @tdm-ignore: AR */

/* @tdm-ignore: DAO */
// @Component({ /* ... */ })
export class ActiveRecordExampleComponent {
  async updateUiDevAr(): Promise<void> {
    const uiDev = await UIDeveloper.findById(15);
    uiDev.framework = 'angular';
    await uiDev.$save();
  }
}
/* @tdm-ignore: DAO */
/* @tdm-example: AR */
/* @tdm-example: DAO */
