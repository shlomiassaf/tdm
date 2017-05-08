import { FormElementType } from '@tdm/angular-forms-mapper';

declare module '@tdm/angular-forms-mapper/tdm-model-form/tdm-model-form.service' {
  interface FormElementType {
    select: 'select',
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