import { Router } from "express";
import {
  createProduct,
  findAllProducts,
  selectOneProduct,
  findAllCategories,
} from '../controllers/productsControllers';
import validationProduct from "../middlewares/validationProduct";

const productsRoutes = Router();

productsRoutes.post('/product', validationProduct, createProduct);
productsRoutes.get('/product', findAllProducts);
// productsRoutes.get('/product/:id', selectOneProduct);
productsRoutes.get('/product/category', findAllCategories);

export default productsRoutes;