import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

// Generic request-body validation middleware. On failure, responds with a 400 and a
// flattened list of validation issues instead of letting invalid data reach the
// controller/Mongoose layer.
export const validateBody =
    (schema: ZodSchema) =>
        (req: Request, res: Response, next: NextFunction): void => {
            const result = schema.safeParse(req.body);

            if (!result.success) {
                res.status(400).send({
                    error: 'Validation failed',
                    issues: result.error.issues.map((issue) => ({
                        path: issue.path.join('.'),
                        message: issue.message,
                    })),
                });
                return;
            }

            req.body = result.data;
            next();
        };
