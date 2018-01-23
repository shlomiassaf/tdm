import { Component } from '@angular/core';
import { User } from '../models';

@Component({
  selector: 'form-sections',
  templateUrl: './sections.component.html',
  styleUrls: [ './sections.component.scss' ]
})
export class SectionsComponent {

  model = new User();

}
