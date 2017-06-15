import { FormElementType } from '@tdm/ngx-dynamic-forms';

declare module '@tdm/ngx-dynamic-forms/src/interfaces' {
  interface FormElementType {
    select: 'select',
    radio: 'radio',
    password: 'password',
    slider: 'slider',
    slideToggle: 'slideToggle',
    textarea: 'textarea',

    /**
     * A Child form.
     * The mapper will map this value into a form group.
     */
    childForm: 'childForm'
  }
}