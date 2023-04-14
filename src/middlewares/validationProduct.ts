import { Request, Response, NextFunction } from "express";
import { productSchema } from "../models/productSchema";
import httpStatus from "http-status";

export default function validationProduct(req: Request, res: Response, next: NextFunction){
    const body = req.body;

   const { error } = productSchema.validate(body, { abortEarly: false});
   if(error){
    const errors = error.details.map((detail) => detail.message);
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors);
   }

   res.locals.body = body;
   next();
}