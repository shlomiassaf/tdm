import { Model, Prop } from '@tdm/ngx-dynamic-forms';
import { ValidationErrors, Validators, AbstractControl } from '@angular/forms';

function fakeCheckName(c: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      const name = c.value || '';
      if (!name || name[0].toLowerCase() === 'a') {
        resolve({
          nameExists: `${name} already exists`
        });
      } else {
        resolve(null);
      }
    }, 1000);
  });
}

@Model({
  form: true
})
export class Hero {
  @Prop({
    form: {
      render: {
        vType: 'number',
        label: 'Hero ID'
      },
      validators: Validators.compose([ Validators.min(1000), Validators.max(999999) ])
    }
  })
  id: number;

  @Prop({
    form: {
      required: true,
      render: {
        vType: 'text',
        label: 'Hero Name'
      },
      asyncValidators: fakeCheckName
    }
  })
  name: string;

  @Prop({
    form: {
      render: {
        vType: 'boolean',
        label: 'Has Tracking Device'
      }
    }
  })
  hasTracking: boolean;

  @Prop({
    form: {
      render: {
        vType: 'slideToggle',
        label: 'Double Agent'
      }
    }
  })
  doubleAgent: boolean;

  @Prop({
    form: {
      render: {
        vType: 'slider',
        label: 'BMI Index',
        data: { min: 1, max: 35 }
      }
    }
  })
  bmi: number;

  @Prop({
    form: {
      required: true,
      render: {
        vType: 'select',
        label: 'Super Power',
        data: { options: [
          { value: 'selfHealing', label: 'Self Healing' },
          { value: 'flying', label: 'Flying' },
          { value: 'cloaking', label: 'Cloaking' },
          { value: 'cloning', label: 'Cloaning' },
          { value: 'invisibility', label: 'Invisibility' }
        ]}
      }
    }
  })
  superPower: 'selfHealing' | 'flying' | 'cloaking' | 'cloning' | 'invisibility';
}
