import { Component } from '@angular/core';
import { DAO } from '@tdm/data';

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

  constructor() {
    DAO.angularHttp(UserDAO).find(5)
      .then( user => {
        console.log(user);
      }, err => alert(err));
    // this.user = new User();
    this.user = User.find(5);


    // this.user.rawDeserialized({trailingSlashes: 'force'}).$ar.next()
    //   .then( () => this.user.raw({withCredentials: true}).$ar.next() )
    //   .then( () => this.gogo());


    // this.user.id = 5;
    // this.user.$refresh().$ar.next()
    //   .then(() => {
    //
    //   })
    //   .catch((err) => {
    //   console.error(err);
    //   });


    // this.gogo();

    // UserConst.query().$ar.next()
    //   .then( coll => {
    //   })
  }

  gogo() {

    let $ar = this.user.$ar;
    let subs = $ar.events$.subscribe(e => {
      console.log(e.type);
      if (e.type === 'ActionError') {
        console.log(e['error'])
      } else if (e.type === 'ActionEnd') {
        setTimeout(() => {
          this.user.id--;
          if (this.user.id === 0) {
            $ar.disconnect();
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
