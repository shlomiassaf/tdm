export class TransformationError extends Error {
  constructor(message?: string) {
    super(message);
  }

  static coll_obj(expectedCol: boolean): TransformationError {
    return new TransformationError(
      expectedCol
        ? `Expected a collection but got an object`
        : `Expected an object but got a collection`
    );
  }
}
