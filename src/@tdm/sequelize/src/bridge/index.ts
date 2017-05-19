import * as seq from 'sequelize';
import { Constructor, targetStore, PropMetadata } from '@tdm/core';
import { SeqAdapter } from '../core';
import { seqDefaultConfig } from '../seq-default-config';

function convertType(type: any): seq.DataTypeAbstract {
  switch (type) {
    case String:
      return seq.STRING;
    case Number:
      return seq.NUMBER;
    case Boolean:
      return seq.BOOLEAN;
    case Date:
      return seq.DATE;

    default:
      // TODO: improve error message
      throw new Error('Could not infer sequelize type.')

  }
}

function bridgeProp(target: Constructor<any>, prop: PropMetadata): seq.DefineAttributeColumnOptions {
  const opt: seq.DefineAttributeColumnOptions = prop.seqCol
    ? prop.seqCol
    : prop.seqCol = {} as any
  ;

  if (!opt.type) {
    opt.type = prop.typedArray ?
      seq.ARRAY({type: convertType(prop.type)})
      : convertType(prop.type)
    ;
  }

  return opt;
}

targetStore.on
  .processType((target: Constructor<any>) => {
    const meta = targetStore.getTargetMeta(target);
    if (meta.isActive(SeqAdapter)) {
      const resource = targetStore.getClassProp(target, 'seqResource');
      const props = meta.getValues(PropMetadata);
      const seq: seq.Sequelize = resource.sequelize || seqDefaultConfig.sequelize;

      const attr: seq.DefineAttributes = {};

      for (let i=0, len=props.length; i<len; i++) {
        attr[props[i].name] = bridgeProp(target, props[i]);
      }

      const model = seq.define<any, any>(meta.name, attr, resource.seqOptions);
      meta.seqModel = model;


    }
  });