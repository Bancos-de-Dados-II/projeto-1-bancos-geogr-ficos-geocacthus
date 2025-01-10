import { Request, Response, NextFunction } from 'express';
import HttpError from '../error/httpError';


const errorMiddleware = (
    err: HttpError, 
    request: Request, 
    response: Response, 
    next: NextFunction
) => {
    console.error(err);
    response.status(err.statusCode || 500).json({
        error: err.message || 'Erro interno do servidor!',
    });
};

export default errorMiddleware;