import { Constructor, errors } from '@tdm/core';

export interface PluginStatic extends Constructor<Plugin> {
  prototype: Plugin;
}

export interface Plugin {

  init(options?: any): void;
}

export class PluginStore {
  private constructor() {}

  assertPlugin(name: string) {
    if (!this[name]) {
      errors.throw.pluginMissing(name);
    }
  }

  /**
   * Register's a plugin in the store.
   * The plugin is not initialized until the user invokes the init() method.
   * @param name
   * @param type
   */
  static register(name: string, type: PluginStatic): void {
    if (PluginStore.prototype.hasOwnProperty(name)) {
      throw new Error(`Plugin conflict "${name}"`);
    }
    Object.defineProperty(PluginStore.prototype, name, { value: new type() });
  }

}

export const plugins: PluginStore = Object.create(PluginStore.prototype);
