### Add package to `src/@tdm`

#####Package structure:
```
--DIR_NAME
   |-src
     |-index.ts
     |-all.ts (optional)
     |- package content...
   |-test
   |-package.json
```

DIR_NAME is the package name and package root directory.

Include a `package.json` file with partial information, every property overrides a blueprint `package.json`

Make sure to include dependencies/peerDependencies.
In the future, the `external` list will be build from that (see below)

`test` is where all spec files are stored.
  
`src` is the source code directory, it **must** include an `index.ts` file.  
An optional `all.ts` files can be set that, if exists, is used by webpack to create the UMD bundle.  
This is useful if you have extensions that might be added by the user, in ESM mode (like rxjs)

### in `tsconfig.json`, `tsconfig.package.json`, `tsconfig.webpack.json` add:
```
  "@tdm/DIR_NAME": ["@tdm/DIR_NAME/src/index.ts"],
  "@tdm/DIR_NAME/*": ["@tdm/DIR_NAME/src/*"],
```

For example, the package **core** with DIR_NAME `core`:
```
  "@tdm/core": ["@tdm/core/src/index.ts"],
  "@tdm/core/*": ["@tdm/core/src/*"],
```

> Once a package is created you can print the whole `paths` section of `tsconfig` by running

```shell
npm run lib:printTsPaths
```

### in `scripts/lib_build_config.js` add externals, not to be included in the build, into the `pkgExternals` object.

```
const pkgExternals = {
  core: [/^@tdm\/tixin/],
  'angular-http': [/^path-to-regexp/, /^@tdm\/tixin/, /^@tdm\/core/],
  'json-api-mapper': [/^@tdm\/tixin/, /^@tdm\/core/]
};
```

the key is the DIR_NAME.

> `@angular` and `rxjs` are added by default.

##### This can be automatically set by the scripts, once a logic is implemented to get this data from `package.json` of each package (and recurse)
