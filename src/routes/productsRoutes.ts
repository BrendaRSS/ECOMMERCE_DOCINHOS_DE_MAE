import { Router } from "express";
import {
  createProduct,
  findAllProducts,
  selectOneProduct,
  findAllCategories,
  findAllFillings,
  findAllDough,
  findAllDecorationsCategories,
  findAllDecorations,
} from '../controllers/productsControllers';
import validationProduct from "../middlewares/validationProduct";

const productsRoutes = Router();

productsRoutes.post('/product', validationProduct, createProduct);
productsRoutes.get('/product', findAllProducts);
// productsRoutes.get('/product/:id', selectOneProduct);
productsRoutes.get('/product/category', findAllCategories);
productsRoutes.get('/product/fillings', findAllFillings);
productsRoutes.get('/product/dough', findAllDough);
productsRoutes.get('/product/category-decorations', findAllDecorationsCategories);
productsRoutes.get('/product/decorations', findAllDecorations);

export default productsRoutes;