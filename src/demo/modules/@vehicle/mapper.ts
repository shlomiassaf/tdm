import { tdm, directMapper } from '@tdm/core';


export const vehicleMapper: tdm.MapperFactory = {
  serializer(source: any): tdm.SerializeMapper {
    return directMapper.serializer(source);
  },
  deserializer(source: any, sourceType: any): tdm.DeserializeMapper {
    return directMapper.deserializer(source.Results, sourceType);
  }
};
