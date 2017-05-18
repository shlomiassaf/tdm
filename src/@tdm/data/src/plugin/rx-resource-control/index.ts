import { Observable } from 'rxjs/Observable'
import{ PluginStore } from '@tdm/data';

import { init } from './rc-ext';

declare module '@tdm/data/resource-control' {
  interface ResourceControl<T> {
    busy$: Observable<boolean>;
    self$: Observable<T>;
    disconnect(): void;
  }
}


export class RxResourceControlPlugin {

  /**
   * Init the plugin
   * @param propertyName {string} ['@ar'] Optional, the property name to attach to the each model
   */
  init(): void {
    init();
  }
}

PluginStore.register('RxResourceControl', RxResourceControlPlugin);

declare module '../../fw/plugin' {
  interface PluginStore {
    /**
     * @extension '@tdm/data/plugin/rx-resource-control'
     */
    readonly RxResourceControl: RxResourceControlPlugin;
  }
}

