import { Component } from '@angular/core';
import { DAO } from '@tdm/data';
import { NgDAO } from '@tdm/ngx-http-client';

import { UserBaseClass, UserConst, UsersInterface, UserDAO } from '../models';

const User = UserConst;
type User = UserConst;



@Component({
  selector: 'vehicle-page',
  styleUrls: [ './playground-page.component.css' ],
  templateUrl: './playground-page.component.html'
})
export class PlaygroundPageComponent {
  public user: User;

  constructor(ngDAO: NgDAO) {
    ngDAO.get(UserDAO).findById(6)
      .then( user => {
        console.log(user);
      }, err => alert(err));

    DAO.angularHttp(UserDAO).findById(5)
      .then( user => {
        console.log(user);
      }, err => alert(err));
    // this.user = new User();
    this.user = User.findById(5);

    // this.user.rawDeserialized({trailingSlashes: 'force'}).$rc.next()
    //   .then( () => this.user.raw({withCredentials: true}).$rc.next() )
    //   .then( () => this.gogo());


    // this.user.id = 5;
    // this.user.$refresh().$rc.next()
    //   .then(() => {
    //
    //   })
    //   .catch((err) => {
    //   console.error(err);
    //   });


    // this.gogo();

    // UserConst.query().$rc.next()
    //   .then( coll => {
    //   })
  }

  gogo() {

    let $rc = this.user.$rc;
    let subs = $rc.events$.subscribe(e => {
      console.log(e.type);
      if (e.type === 'ActionError') {
        console.log(e['error'])
      } else if (e.type === 'ActionEnd') {
        setTimeout(() => {
          this.user.id--;
          if (this.user.id === 0) {
            $rc.disconnect();
          } else {
            this.user.$refresh();
          }
        }, 500)
      }
    });

    this.user.id = 2;
    this.user.$refresh();
  }
}
