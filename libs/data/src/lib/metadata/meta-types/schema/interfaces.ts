export interface ValidationContext {
  /**
   * The identifier for the member being validated.
   */
  member: TdmPropertyKey;

  /**
   * The instance
   */
  target: any;

  /**
   * The value to validate
   */
  value: any;

  /**
   * The reflected type of the value
   */
  type: any;
}

export type ValidationSchedule = 'incoming' | 'outgoing' | 'both' | 'skip';

export interface ValidationError {
  context: ValidationContext;
  errors: { [name: string]: string };
}

export interface Validator {
  readonly name: string;

  validate(context: ValidationContext): Promise<boolean> | boolean;

  errorMessage(context: ValidationContext): string;
}

export interface ValidationMetadataArgs {
  validators: Validator | Validator[];
}
