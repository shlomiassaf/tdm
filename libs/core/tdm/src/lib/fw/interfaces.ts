/**
 * The transformation logic defining the input/output of the object.
 *
 * inclusive - include all except explicitly excluded properties.
 * exclusive - exclude all except explicitly included properties.
 *
 * In "inclusive" mode all properties are included, except members decorated with @Exclude
 * In "exclusive" mode everything is excluded except members decorated with @Prop
 */
export type TransformStrategy = 'inclusive' | 'exclusive';

/**
 * The transformation direction.
 * incoming: Plain object to class
 * outgoing: class to plain object
 */
export type TransformDir = 'incoming' | 'outgoing';

export type TransformFn = (value: any) => any;

export type PropAliasConfig = { [P in TransformDir]: string };

export type PropTransformConfig = { [P in TransformDir]: TransformFn };

export interface NamingStrategyFn extends Function {
  (propertyName: string): string;
}

export type NamingStrategyConfig = { [P in TransformDir]: NamingStrategyFn };
