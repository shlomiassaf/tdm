import { directMapper, MapperFactory, SerializeMapper, DeserializeMapper } from '@tdm/core/tdm';


export const vehicleMapper: MapperFactory = {
  serializer(source: any): SerializeMapper {
    return directMapper.serializer(source);
  },
  deserializer(source: any, sourceType: any): DeserializeMapper {
    return directMapper.deserializer(source.Results, sourceType);
  }
};
