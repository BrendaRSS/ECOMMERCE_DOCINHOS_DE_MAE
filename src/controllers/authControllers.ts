import { Request, Response } from "express";
import httpStatus from "http-status";
import authService from "../service/authService";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

export async function signUp(req: Request, res: Response) {
    const body = res.locals.bodyHashPassword;

    try{
        const signUpUser = await authService.signUpUser(body);
        return res.sendStatus(httpStatus.CREATED);
    } catch(error) {
        if(error.name === "ConflictError") {
            return res.sendStatus(httpStatus.CONFLICT);
        }
        if(error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.UNPROCESSABLE_ENTITY);
        }
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function signIn(req: Request, res: Response) {
    const body = res.locals.body;

    try{
        const userExist = await authService.signIn(body);

        const token = jwt.sign({ id: userExist.id }, process.env.SECRET_JWT, { expiresIn: 86400 });

        return res.status(httpStatus.OK).send();
    } catch (error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}