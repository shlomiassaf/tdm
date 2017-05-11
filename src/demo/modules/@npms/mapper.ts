import {
  MapperFactory,
  DeserializeMapper,
  SerializeMapper,
  directMapper
} from '@tdm/core';


export const packageMapper: MapperFactory = {
  serializer(source: any): SerializeMapper {
    return directMapper.serializer(source);
  },
  deserializer(source: any, sourceType: any): DeserializeMapper {
    if (source) {
      if (!source.hasOwnProperty('analyzedAt')) {
        const keys = Object.keys(source);
        if (keys.length > 0) {
          source = keys.reduce( (coll, pkgName) => {
            coll.push(Object.assign(source[pkgName], { name: pkgName }));
            return coll;
          }, []);
        }
      }
    }

    return directMapper.deserializer(source, sourceType);
  }
};
