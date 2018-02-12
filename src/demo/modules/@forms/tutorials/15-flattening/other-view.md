<!--@tdm-example:visualReal-->
```ts
export class Hero {
  id: number;
  name: string;
  hasTracking: boolean;
  doubleAgent: boolean;
  bmi: number;
  superPower: 'selfHealing' | 'flying' | 'cloaking' | 'cloning' | 'invisibility';
  base: {
    name: string;
    coordinates: {
      lng: number;
      lat: number;
    }
  };
}
```
<!--@tdm-example:visualReal-->
<!--@tdm-example:visualVirtual-->
```ts
export class Hero {
  id: number;
  name: string;
  hasTracking: boolean;
  doubleAgent: boolean;
  bmi: number;
  superPower: 'selfHealing' | 'flying' | 'cloaking' | 'cloning' | 'invisibility';
  
  baseName: string;
  
  baseLng: number;
  baseLat: number;
  
  
}
```
<!--@tdm-example:visualVirtual-->
<!--@tdm-example:coordinates-->

```ts
coordinates: {
  lng: {
    render: {
      vType: 'number',
      label: 'Base Longitude'
    }
  },
  lat: {
    render: {
      vType: 'number',
      label: 'Base Latitude'
    }
  }
}
```

<!--@tdm-example:coordinates-->
<!--@tdm-example:coordinatesClass-->

```ts
export class Coordinates {
  @FormProp({
    render: {
      vType: 'number',
      label: 'Base Longitude'
    }
  })
  lng: number;

  @FormProp({
    render: {
      vType: 'number',
      label: 'Base Latitude'
    }
  })
  lat: number;
}
```

<!--@tdm-example:coordinatesClass-->
<!--@tdm-example:base-->

```ts
name: {
  required: true,
  render: {
    vType: 'text',
    label: 'Base Name',
  }
},
coordinates: {
  flatten: /* JUST DID ABOVE */
}
```
<!--@tdm-example:base-->

<!--@tdm-example:baseClass-->
```ts

export class Base {
  @FormProp({
    required: true,
    render: {
      vType: 'text',
      label: 'Base Name',
    }
  })
  name: string;

  @Prop({
    form: {
      childForm: true
    }
  })
  coordinates: Coordinates;
}
```

<!--@tdm-example:baseClass-->