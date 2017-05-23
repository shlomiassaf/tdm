import { tdm, directMapper } from '@tdm/core';


export const packageMapper: tdm.MapperFactory = {
  serializer(source: any): tdm.SerializeMapper {
    return directMapper.serializer(source);
  },
  deserializer(source: any, sourceType: any): tdm.DeserializeMapper {
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
