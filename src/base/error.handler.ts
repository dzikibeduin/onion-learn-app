import { Request, Response, NextFunction } from 'express';
import HttpException from './exceptions/http.exception';

export default function ErrorHandler(
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const status = error.status || 500;
  const message = error.message || 'sth went wrong';

  res.status(status).send({
    status,
    message,
  });
}
