import {
  MapperFactory,
  DeserializeMapper,
  SerializeMapper,
  directMapper
} from '@tdm/transformation';


export const vehicleMapper: MapperFactory = {
  serializer(source: any): SerializeMapper {
    return directMapper.serializer(source);
  },
  deserializer(source: any, sourceType: any): DeserializeMapper {
    return directMapper.deserializer(source.Results, sourceType);
  }
};
