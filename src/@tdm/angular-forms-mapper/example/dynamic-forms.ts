import { FormElementType } from '@tdm/angular-forms-mapper';

/*
  Adding custom types
 */
declare module '@tdm/angular-forms-mapper/tdm-model-form/tdm-model-form.service' {
  interface FormElementType {
    password: 'password',
    slider: 'slider',
    slideToggle: 'slideToggle',
    textarea: 'textarea'
  }
}