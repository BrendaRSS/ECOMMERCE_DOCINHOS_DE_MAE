import { Request, Response } from "express";
import httpStatus from "http-status";
import authService from "../service/authService";

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

}