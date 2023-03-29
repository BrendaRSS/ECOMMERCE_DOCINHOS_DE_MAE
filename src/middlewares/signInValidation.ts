import { Request, Response, NextFunction } from "express";
import { signInSchema } from "../models/authSchema";

export async function signInValidation(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
}
