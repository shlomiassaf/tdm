### Add package to `src/@tdm`

#####Package structure:
```
--DIR_NAME
   |-src
     |-index.ts
     |-bundle.ts (optional)
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
An optional `bundle.ts` files can be set that, if exists, is used by webpack to create the UMD bundle.  
This is useful if you have extensions that might be added by the user, in ESM mode (like rxjs)

## in `jest.base-config.json` -> `moduleNameMapper` add accordingly.

### in `tsconfig.json` add:
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

the key is the DIR_NAME.

> `@angular` is added by default.
