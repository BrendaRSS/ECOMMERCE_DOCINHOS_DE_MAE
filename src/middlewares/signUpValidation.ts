import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { signUpSchema } from '../models/authSchema';
import bcrypt from "bcrypt";

export async function signUpValidation(req: Request, res: Response, next: NextFunction) {
    const body = req.body

    const {error} = signUpSchema.validate(body, {abortEarly: false});

    if(error){
        const errors = error.details.map((detail) => detail.message)
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors);
    }

    const hashPassword = bcrypt.hashSync(body.password, 12);
    const bodyHashPassword = {...body, password: hashPassword}
    res.locals.bodyHashPassword = bodyHashPassword;
    next();
}