import { FormElementType } from '@tdm/ngx-dynamic-forms';

declare module '@tdm/ngx-dynamic-forms/lib/interfaces' {
  interface FormElementType {
    text: never;
    number: { min?: number; max?: number };
    boolean: never;
    date: {
      min?: Date;
      max?: Date;
      filter?: (date: Date) => boolean;
      startView?: 'year' | 'month';
      startAt?: Date;
    };

    radio: { options: Array<{ value: any; label?: string }> };
    select: { options: Array<{ value: any; label?: string }> };
    password: never;
    slider: { min?: number; max?: number };
    slideToggle: never;
    textarea: { autoSize?: boolean; minRows?: number; maxRows?: number };
  }
}
