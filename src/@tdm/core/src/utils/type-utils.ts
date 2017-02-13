export type DefineProperty<T> = (t: any, p: keyof T, a: PropertyDescriptor) => boolean

export type DefinePropertyTyped<T, Z> = (t: any, p: keyof T, a: TypedPropertyDescriptor<Z>) => boolean

export type DefineProperties<T> = (t: any, o: { [ P in keyof T ]?: TypedPropertyDescriptor<T[P]> }) => any

export type Constructor<T> = new(...args: any[]) => T;
