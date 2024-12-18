import {
  Catch,
  HttpException,
  ExceptionFilter,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = HttpStatus.INTERNAL_SERVER_ERROR;
    //exception.getStatus();
    const exceptionResponse = exception.getResponse();
    let message = 'Service Error';

    if (exceptionResponse?.message instanceof Array) {
      message = exceptionResponse.message[0];
    }

    response.status(200).json({
      code: exceptionResponse.statusCode || status,
      msg: exceptionResponse.message || message,
      data: null,
    });
  }
}
