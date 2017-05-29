import {
  targetEvents,
  stringify,
  TransformStrategy,
  NamingStrategyConfig,
  MetaClass,
  BaseMetadata,
  DecoratorInfo,
  Constructor,
  MetaClassMetadata
} from '../../fw';
import { targetStore, TargetMetadata, ModelMetadataArgs } from '../../metadata';
import { MapperFactory } from '../../mapping';

export function extendSingle(from: ModelMetadata, to: ModelMetadata | undefined, meta: { from: Constructor<any>, to: Constructor<any> }): ModelMetadata | undefined {
  if (!to) {
    const tMeta = targetStore.getTargetMeta(meta.to);
    return tMeta[MODEL_PH] = from.clone(meta.to);
  }
}

export const MODEL_PH = Symbol('ModelMetadata placeholder');

@MetaClass<ModelMetadataArgs, ModelMetadata>({
  allowOn: ['class'],
  single: true,
  extendSingle
})
export class ModelMetadata extends BaseMetadata implements ModelMetadataArgs {
  identity: PropertyKey;
  resName: string;
  transformStrategy: TransformStrategy | undefined;
  transformNameStrategy: NamingStrategyConfig | undefined;
  mapper: MapperFactory;

  tMeta: TargetMetadata;
  target: Constructor<any>;

  get built(): boolean {
    return this._built;
  }

  private _built: boolean;

  constructor(metaArgs: ModelMetadataArgs, info: DecoratorInfo, target: Constructor<any>) {
    super(info);

    const tMeta = targetStore.getTargetMeta(target);

    const classMetadata = tMeta.hasOwnProperty(MODEL_PH) ? tMeta[MODEL_PH] : {};
    Object.assign(this, classMetadata, metaArgs || {}, {target, tMeta}); // last obj is for clone, so we won't take previous values

    if (!this.resName) {
      this.resName = stringify(target);
    }

    tMeta[MODEL_PH] = this;
  }

  clone(target: Constructor<any>): ModelMetadata {
    const ctor: typeof ModelMetadata = <any>this.constructor;
    return new ctor(this, this.decoratorInfo, target);
  }

  factory(isColl: boolean): any {
    return isColl ? this.tMeta.createCollection() : new this.target();
  }

  /**
   * Build the model.
   * @param safe If set to true will not throw if the model is already built.
   * @returns true if the model was built by this call
   */
  build(safe?: true): boolean {
    if(this.built) {
      if (safe === true) {
        return false;
      } else {
        throw new Error(`"${stringify(this.target)}" already built.`);
      }
    }
    this._built = true;
    targetEvents.FIRE.beforeProcessType(this.target);
    targetEvents.FIRE.processType(this.target);
    return true;
  }
}

declare module '../../fw/metadata-framework/meta-class' {
  module MetaClass {
    function get(target: typeof ModelMetadata): MetaClassMetadata<ModelMetadataArgs, ModelMetadata>;
  }
}