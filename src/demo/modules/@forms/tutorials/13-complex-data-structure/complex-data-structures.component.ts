import { Component } from '@angular/core';

@Component({
  selector: 'form-complex-data-structures',
  templateUrl: './complex-data-structures.component.html',
  styleUrls: [ './complex-data-structures.component.scss' ]
})
export class ComplexDataStructuresComponent {
  code: any = System.import(/* webpackChunkName: "FormsComplexDataStructuresComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line
  /* @tdm-ignore:* */
  static tutorial = {
    id: 'complex-data-structures',
    name: 'Overview',
    subHeader: 'Complex Data Structures'
  };
  /* @tdm-ignore:* */
}
