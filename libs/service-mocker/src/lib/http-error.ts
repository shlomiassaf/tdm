export interface HttpErrorConfig<T extends typeof HttpError = typeof HttpError> {
  message?: string;
  description?: string;
  base?: T;
}

export const KNOWN_HTTP_ERRORS = {
  400: {
    name: 'BadRequest',
    message: 'Bad Request'
  },
  401: {
    name: 'Unauthorized',
    message: 'Unauthorized'
  },
  402: {
    name: 'PaymentRequired',
    message: 'Payment Required'
  },
  403: {
    name: 'Forbidden',
    message: 'Forbidden'
  },
  404: {
    name: 'NotFound',
    message: 'Not Found'
  },
  405: {
    name: 'MethodNotAllowed',
    message: 'Method Not Allowed'
  },
  406: {
    name: 'NotAcceptable',
    message: 'Not Acceptable'
  },
  /* ... */
  500: {
    name: 'InternalServerError',
    message: 'Internal Server Error'
  },
  501: {
    name: 'NotImplemented',
    message: 'Not Implemented'
  },
  502: {
    name: 'BadGateway',
    message: 'Bad Gateway'
  },
  503: {
    name: 'ServiceUnavailable',
    message: 'Service Unavailable'
  },
  504: {
    name: 'Gateway Timeout',
    message: 'Gateway Timeout'
  },
  505: {
    name: 'HTTP Version Not Supported',
    message: 'HTTP Version Not Supported'
  }
};

const UNKNOWN_HTTP_ERROR = {
  name: 'UnknownError',
  message: 'Unknown Error'
};

export class HttpError extends Error {

  httpCode: number;
  description?: string;

  private constructor() {
    super();
  }

  static create(httpCode: number, config: HttpErrorConfig = <any> {}): HttpError {
    // tslint:disable-next-line:no-use-before-declare
    const { message, description } = config;
    const base = config.base || HttpError;

    const httpError = new base();
    Object.setPrototypeOf(httpError, base.prototype);

    httpError.httpCode = httpCode || 500;
    if ( message ) {
      httpError.message = message;
    }
    if ( description ) {
      httpError.description = description;
    }

    httpError.stack = new Error().stack;

    return httpError;
  }

  static createKnown(httpCode: keyof typeof KNOWN_HTTP_ERRORS, description?: string): HttpError {
    let knownError = KNOWN_HTTP_ERRORS[httpCode];
    if (!knownError) {
      knownError = UNKNOWN_HTTP_ERROR;
    }

    const httpError = HttpError.create(Number(httpCode), { message: knownError.message, description });
    httpError.name = knownError.name;
    return httpError;
  }
}
