import { Request, Response, NextFunction } from 'express';

import constants from './constants';
import { ValidateError } from 'tsoa';

export interface ErrorType {
  statusCode: number;
  name: string;
  message: string;
  fields?: { [field: string]: { message: string } };
}

export class ApiError extends Error implements ErrorType {
  public statusCode: number = 500;
  public fields?: { [field: string]: { message: string } };

  constructor(errorType: ErrorType) {
    super(errorType.message);
    this.name = errorType.name;
    if (errorType.statusCode) this.statusCode = errorType.statusCode;
    this.fields = errorType.fields;
  }
}

export class ErrorHandler {
  public static handleError(
    err: ErrorType,
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void {
    const normalizedError: ApiError = ErrorHandler.normalizeError(err);
    const { name, message, fields, statusCode } = normalizedError;
    if (err instanceof ValidateError) {
      console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
      return res.status(422).json({
        message: 'Validation Failed',
        details: err?.fields,
      });
    }

    if (err instanceof Error) {
      return res.status(statusCode).json({
        message,
        name,
        fields,
      });
    }

    next();
  }

  private static normalizeError(error: ApiError): ApiError {
    const normalizedError: ApiError = new ApiError(error);
    Object.keys(constants.errorMap).forEach((errorKey) => {
      if (errorKey === normalizedError.name)
        Object.assign(normalizedError, constants.errorMap[errorKey]);
    });
    Object.keys(constants.errorTypes).forEach((errorTypeKey) => {
      const errorType = constants.errorTypes[errorTypeKey];
      if (errorType.statusCode === normalizedError.statusCode)
        normalizedError.name = errorType.name;
    });
    return normalizedError;
  }
}
