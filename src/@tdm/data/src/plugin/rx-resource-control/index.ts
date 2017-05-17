import{ PluginStore} from '../../fw';

import { init } from './rc-ext';

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

