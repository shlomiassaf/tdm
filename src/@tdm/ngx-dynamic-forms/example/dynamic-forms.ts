import { FormElementType } from '@tdm/ngx-dynamic-forms';

/*
  Adding custom types
 */
declare module '@tdm/ngx-dynamic-forms/tdm-model-form/tdm-model-form.service' {
  interface FormElementType {
    password: 'password',
    slider: 'slider',
    slideToggle: 'slideToggle',
    textarea: 'textarea'
  }
}