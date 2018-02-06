import { FormElementType } from '@tdm/ngx-dynamic-forms';

declare module '@tdm/ngx-dynamic-forms/src/interfaces' {
  interface FormElementType {
    radio: { options: Array<{ value: any; label?: string; }> };
    select: { options: Array<{ value: any; label?: string; }> };
    password: never;
    slider: { min?: number, max?: number};
    slideToggle: never;
    textarea: never;
  }
}
