import { registerEvent, Constructor } from '@tdm/transformation';
import { BaseActiveRecord } from '../../fw';
import { ActiveRecordCollection } from '../../active-record';
import { ResourceControl } from '../../resource-control';

import './index';
import { getCtrl } from '../../resource-control/get-ctrl';

function getThisCtrl() { return getCtrl(this); }

function onBuildMetadata(target: Constructor<any>) {
  Object.defineProperty(target.prototype, '$ar', { configurable: true, get: getThisCtrl });
}
registerEvent('onBuildMetadata', onBuildMetadata);


declare module '../../active-record/interfaces' {
  interface BaseActiveRecord<T> {
    /**
     * @extension '@tdm/core/add/resource-control'
     */
    readonly $ar: ResourceControl<T>;
  }
}


export class StatefulActiveRecordCollection<T> extends ActiveRecordCollection<T> implements BaseActiveRecord<StatefulActiveRecordCollection<T>> {
}
Object.defineProperty(StatefulActiveRecordCollection.prototype, '$ar', { get: getThisCtrl });

declare module '../../active-record/active-record-collection' {
  interface ActiveRecordCollection<T> {
    /**
     * @extension '@tdm/core/add/resource-control'
     */
    readonly $ar: ResourceControl<StatefulActiveRecordCollection<T>>;
  }
}
ActiveRecordCollection.extend(StatefulActiveRecordCollection);
