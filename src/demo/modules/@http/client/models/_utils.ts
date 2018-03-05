
export const transformNameStrategy = {
  incoming: (propertyName: string) => propertyName[0].toLowerCase() + propertyName.substr(1),
  outgoing: (propertyName: string) =>  propertyName[0].toUpperCase() + propertyName.substr(1)
};
