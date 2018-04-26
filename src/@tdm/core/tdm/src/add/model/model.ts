import {
  getProtoChain,
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

export const MODEL_PH = Symbol('ModelMetadata placeholder');

// exporting to satisfy angular AOT
/** @internal */
export function extendSingle(from: ModelMetadata,
                             to: ModelMetadata | undefined,
                             meta: { from: Constructor<any>, to: Constructor<any> }): ModelMetadata | undefined {
  if (!to) {
    const tMeta = targetStore.getTargetMeta(meta.to);
    return tMeta[MODEL_PH] = from.clone(meta.to);
  } else {
    Object.keys(from).forEach( k => {
      if (! (k in to) ) {
        to[k] = from[k];
      }
    });
  }
}

@MetaClass<ModelMetadataArgs, ModelMetadata>({
  allowOn: ['class'],
  single: true,
  extendSingle
})
export class ModelMetadata extends BaseMetadata implements ModelMetadataArgs {
  identity: TdmPropertyKey;
  resName: string;
  transformStrategy: TransformStrategy | undefined;
  transformNameStrategy: NamingStrategyConfig | undefined;
  mapper: MapperFactory;

  tMeta: TargetMetadata;
  target: Constructor<any>;
  skip?: true;

  get built(): boolean {
    return this._built;
  }

  private _built: boolean;

  constructor(metaArgs: ModelMetadataArgs, info: DecoratorInfo, target: Constructor<any>) {
    super(info);

    const tMeta = targetStore.getTargetMeta(target);

    /*
    Checking up the proto-tree if there are temp model metadata values set.
    This allows inheritance of model classes where the base class has no class decorator but do have
    member decorators.

    ```ts
        class UserBase {
          @Identity()
          @UrlParam() id: number;
        }

        @HttpResource({
          endpoint: '/api/users/:id/:param',
          urlParams: { param: '99' }
        })
        class User extends ActiveRecord(UserBase) { }
    ```

    In the example, UserBase does not have a class decorator but the derived class User does.

    > Note: Stopping on the first prototype that has an instantiated ModelMetadata, we can stop there
    because implementation will invoke `extend` for prototypes and since it's now an instance it will auto-extend.
     */
    const protoChain = getProtoChain(target);
    for (let i = protoChain.length  - 1; i > 0; i--) { // we skip idx 0, its the target itself.
      const meta = targetStore.hasTarget(protoChain[i]) && targetStore.getTargetMeta(protoChain[i]);
      if (meta) {
        if (meta[MODEL_PH] && !meta.hasModel) {
          Object.assign(this, meta[MODEL_PH]);
        } else if (meta.hasModel) {
          break;
        }
      }
    }

    const classMetadata = tMeta.hasOwnProperty(MODEL_PH) ? tMeta[MODEL_PH] : {};
    Object.assign(
      this,
      classMetadata,
      metaArgs || {},
      {target, tMeta} // last obj is for clone, so we won't take previous values
    );

    if (!this.resName) {
      this.resName = stringify(target);
    }

    tMeta[MODEL_PH] = this;
  }

  clone(target: Constructor<any>): ModelMetadata {
    const ctor: typeof ModelMetadata = <any> this.constructor;
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
    if (this.built) {
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
  namespace MetaClass {
    function get(target: typeof ModelMetadata): MetaClassMetadata<ModelMetadataArgs, ModelMetadata>;
  }
}
