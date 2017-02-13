import { TransformDir } from './schema';



export interface ExcludeMetadataArgs {
  /**
   * The type of transformation to exclude from, if not set excludes from all.
   * @optional
   * @default undefined (all)
   */
  from?: TransformDir;
}

export class ExcludeMetadata {
  from?: TransformDir;

  constructor(obj: ExcludeMetadataArgs, public name: PropertyKey) {
    this.from = obj.from;
  }


  static DEFAULTS: ExcludeMetadataArgs = {} as any;

  static VALIDATE(obj: ExcludeMetadataArgs): void {
  }
}

