import { FormElementType } from '@tdm/ngx-dynamic-forms';

declare module '@tdm/ngx-dynamic-forms/src/interfaces' {
  interface FormElementType {
    text: never;
    number: never;
    boolean: never;
  }
}
