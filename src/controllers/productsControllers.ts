import { Request, Response } from "express";
import httpStatus from "http-status";
import productService from "../service/productService";
import { Product } from "../protocols";

export async function createProduct(req: Request, res: Response){
    const body = res.locals.body as Product;

    try{
        const product = await productService.createProduct(body);

        return res.status(httpStatus.CREATED).send(product);
    } catch(error) {

        if(error.name === 'BadRequestError'){
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }

        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function findAllProducts(req: Request, res: Response){
    try{
        const products = await productService.findAllProducts();

        return res.status(httpStatus.OK).send(products);
    } catch (error) {
        if (error.name === 'BadRequestError') {
          return res.sendStatus(httpStatus.BAD_REQUEST);
        }

        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function selectOneProduct(req: Request, res: Response){

}

export async function findAllCategories(req: Request, res: Response){
    try{
        const categories = await productService.findAllCategories();

        return res.status(httpStatus.OK).send(categories);
    } catch (error){
        if (error.name === 'BadRequestError') {
          return res.sendStatus(httpStatus.BAD_REQUEST);
        }
        
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function findAllFillings(req: Request, res: Response) {
  try {
    const fillings = await productService.findAllFillings();

    return res.status(httpStatus.OK).send(fillings);
  } catch (error) {
    if (error.name === 'BadRequestError') {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }

    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function findAllDough(req: Request, res: Response){
    try{
        const cakeDough = await productService.findAllDough();

        return res.status(httpStatus.OK).send(cakeDough);
    } catch(error) {
        if (error.name === 'BadRequestError') {
          return res.sendStatus(httpStatus.BAD_REQUEST);
        }

        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function findAllDecorationsCategories(req: Request, res: Response){
  try{
    const categories = await productService.findAllDecorationsCategories();

    return res.status(httpStatus.OK).send(categories);
  } catch(error){
    if (error.name === 'BadRequestError') {
      return res.sendStatus(httpStatus.BAD_REQUEST);
     }

    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function findAllDecorations(req: Request, res: Response){
  try{
    const decorations = await productService.findAllDecorations();

    return res.status(httpStatus.OK).send(decorations);
  } catch(error){
    if (error.name === 'BadRequestError') {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }

    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}