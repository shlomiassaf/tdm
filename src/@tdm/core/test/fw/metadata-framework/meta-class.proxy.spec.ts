import { targetStore, registerHelpers, PropMetadata, MetaClass, BaseMetadata, DecoratorInfo, ModelMetadata } from '@tdm/core/tdm';
import { Prop, Model } from '@tdm/core';

import { TargetMetaModifier } from '@tdm/core/testing';


export interface ExtendMeMetadataArgs {
  testProp: string;
}

declare module '@tdm/core/tdm/src/metadata/prop' {
  interface PropMetadataArgs {
    extendMe?: true | ExtendMeMetadataArgs;
    extendMe1?: true | ExtendMeMetadataArgs;
  }
}

@MetaClass<ExtendMeMetadataArgs, ExtendMeMetadata>({
  proxy: {
    host: PropMetadata,
    containerKey: 'extendMe'
  }
})
class ExtendMeMetadata extends BaseMetadata {
  testProp: string;

  constructor(obj: ExtendMeMetadataArgs, info: DecoratorInfo) {
    super(info);

    if (typeof obj === 'object') {
      Object.assign(this, obj);
    }
  }

}

@MetaClass<ExtendMeMetadataArgs, ExtendMeMetadata1>({
  proxy: {
    host: PropMetadata,
    containerKey: 'extendMe1',
    before: (metaArgs: ExtendMeMetadataArgs) => {
      metaArgs.testProp = 'test1';
      return metaArgs;
    }
  }
})
class ExtendMeMetadata1 extends ExtendMeMetadata {}

export interface TopLevelMetadataArgs {
  value: number;
}
@MetaClass<TopLevelMetadataArgs, TopLevelMetadata>({
  single: true,
  allowOn: ['class'],
  proxy: {
    host: ModelMetadata,
    containerKey: 'top',
    forEach: true
  },
  register: registerHelpers.array
})
class TopLevelMetadata extends BaseMetadata {
  value: number;
  constructor(metaArgs: TopLevelMetadataArgs, info: DecoratorInfo) {
    super(info);
    this.value = metaArgs.value;
  }
}
declare module '@tdm/core/tdm/src/metadata/model-metadata' {
  interface ModelMetadataArgs {
    top?: TopLevelMetadataArgs[]
  }
}
const TopLevel = MetaClass.decorator(TopLevelMetadata, 'class');

@TopLevel({ value: 4 })
@Model({
  top: [
    { value: 1 },
    { value: 2 },
    { value: 3 }
  ]
})
class User {
  @Prop()
  prop1: string;

  @Prop({
    extendMe: {
      testProp: 'test'
    }
  })
  prop2: string;


  @Prop({
    extendMe1: {
      testProp: 'test'
    }
  })
  prop3: string;

  @Prop({
    extendMe: {
      testProp: 'test'
    },
    extendMe1: {
      testProp: 'test'
    }
  })
  prop4: string;
}

describe('@tdm/core', () => {
  describe('fw', () => {
    describe('@MetaClass()', () => {
      it('should be able to define metadata from a remote metadata host', () => {


        const userModifier = TargetMetaModifier.create(User);
        expect(userModifier.getProp('prop1')['extendMe']).toBeUndefined();
        expect(userModifier.getProp('prop2')['extendMe']).toBeUndefined();

        const extendMe = targetStore.getMetaFor(User, ExtendMeMetadata, 'prop2');
        expect(extendMe.testProp).toEqual('test');

        expect(targetStore.getMetaFor(User, ExtendMeMetadata, 'prop1')).toBeUndefined();
      });

      it('should be able to transform defined metadata from a remote metadata host', () => {

        const extendMe = targetStore.getMetaFor(User, ExtendMeMetadata1, 'prop3');
        expect(extendMe.testProp).toEqual('test1');

      });

      it('should be able to handle multiple defined metadata from a remote metadata host', () => {

        const extendMe = targetStore.getMetaFor(User, ExtendMeMetadata, 'prop4');
        expect(extendMe.testProp).toEqual('test');

        const extendMe1 = targetStore.getMetaFor(User, ExtendMeMetadata1, 'prop4');
        expect(extendMe1.testProp).toEqual('test1');

      });

      it('should reflect iterable proxy', () => {
        const arr = targetStore.getMetaFor<TopLevelMetadata, TopLevelMetadata[]>(User, <any>TopLevelMetadata, true);
        expect(arr).toBeInstanceOf(Array);
        expect(arr[0].value).toEqual(1);
        expect(arr[1].value).toEqual(2);
        expect(arr[2].value).toEqual(3);
        expect(arr[3].value).toEqual(4);
      });
    })
  })
});