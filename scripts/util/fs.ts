import * as Path from 'path';
import * as del from 'del';

export const ROOT = Path.resolve(__dirname, '../..');

export function root(...args: string[]): string {
  return Path.join(ROOT, ...args);
}

export const FS_REF = {
  PKG_DIST: 'dist_package',
  BUNDLE_DIR: 'bundle',
  NG_COMPILE: 'compiled',
  WEBPACK_CONFIG: 'config/webpack.package.ts',
  TS_CONFIG_TEMPLATE: 'tsconfig.package.json',
  TS_CONFIG_TMP: '.tsconfig.tmp.json',
  SRC_CONTAINER: 'src',
  NG_FLAT_MODULE_EXT: '.ng-flat',
  TEMP_DIR: '.tmp',
  VERSION_CACHE: 'version_cache.json'
};

export function cleanup(): Promise<string[]> {
  return del([root(FS_REF.TEMP_DIR), root(FS_REF.TS_CONFIG_TMP)]);
}