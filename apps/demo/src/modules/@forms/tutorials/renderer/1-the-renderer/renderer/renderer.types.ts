import { FormElementType } from '@tdm/ngx-dynamic-forms';

declare module '@tdm/ngx-dynamic-forms/lib/interfaces' {
  interface FormElementType {
    text: never;
    number: { min?: number, max?: number};
    boolean: never;
  }
}
