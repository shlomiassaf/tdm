import { tdm, Prop } from '@tdm/core';

import { TargetMetaModifier } from '@tdm/core/testing';

export interface ExtendMeMetadataArgs {
  testProp: string;
}

declare module '@tdm/core/metadata/prop' {
  interface PropMetadataArgs {
    extendMe?: true | ExtendMeMetadataArgs;
    extendMe1?: true | ExtendMeMetadataArgs;
  }
}

@tdm.MetaHost({
  host: tdm.PropMetadata,
  containerKey: 'extendMe'
})
class ExtendMeMetadata extends tdm.BaseMetadata {
  testProp: string;

  constructor(obj: ExtendMeMetadataArgs, info: tdm.DecoratorInfo) {
    super(info);

    if (typeof obj === 'object') {
      Object.assign(this, obj);
    }
  }

  static metaFactory = tdm.metaFactoryFactory<ExtendMeMetadataArgs, ExtendMeMetadata>(ExtendMeMetadata);

  static register = tdm.registerFactory<ExtendMeMetadata>();
}

@tdm.MetaHost({
  host: tdm.PropMetadata,
  containerKey: 'extendMe1',
  before: (metaArgs: ExtendMeMetadataArgs) => {
    metaArgs.testProp = 'test1';
    return metaArgs;
  }
})
class ExtendMeMetadata1 extends tdm.BaseMetadata {
  testProp: string;

  constructor(obj: ExtendMeMetadataArgs, info: tdm.DecoratorInfo) {
    super(info);

    if (typeof obj === 'object') {
      Object.assign(this, obj);
    }
  }

  static metaFactory = tdm.metaFactoryFactory<ExtendMeMetadataArgs, ExtendMeMetadata1>(ExtendMeMetadata1);

  static register = tdm.registerFactory<ExtendMeMetadata1>();
}

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
    describe('@MetaHost()', () => {
      it('should be able to define metadata from a remote metadata host', () => {


        const userModifier = TargetMetaModifier.create(User);
        expect(userModifier.getProp('prop1')['extendMe']).toBeUndefined();
        expect(userModifier.getProp('prop2')['extendMe']).toBeUndefined();

        const extendMe = tdm.targetStore.getMetaFor(User, ExtendMeMetadata, 'prop2');
        expect(extendMe.testProp).toEqual('test');

        expect(tdm.targetStore.getMetaFor(User, ExtendMeMetadata, 'prop1')).toBeUndefined();
      });

      it('should be able to transform defined metadata from a remote metadata host', () => {

        const extendMe = tdm.targetStore.getMetaFor(User, ExtendMeMetadata1, 'prop3');
        expect(extendMe.testProp).toEqual('test1');

      });

      it('should be able to handle multiple defined metadata from a remote metadata host', () => {

        const extendMe = tdm.targetStore.getMetaFor(User, ExtendMeMetadata, 'prop4');
        expect(extendMe.testProp).toEqual('test');

        const extendMe1 = tdm.targetStore.getMetaFor(User, ExtendMeMetadata1, 'prop4');
        expect(extendMe1.testProp).toEqual('test1');

      });
    })
  })
});