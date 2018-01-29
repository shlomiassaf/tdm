import { FormElementType } from '@tdm/ngx-dynamic-forms';

declare module '@tdm/ngx-dynamic-forms/src/interfaces' {
  interface FormElementType {
    radio: 'radio';
    select: 'select';
    password: 'password';
    slider: 'slider';
    slideToggle: 'slideToggle';
    textarea: 'textarea';
  }
}
