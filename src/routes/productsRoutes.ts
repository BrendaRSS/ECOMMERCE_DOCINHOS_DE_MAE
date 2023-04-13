import { Router } from "express";
import { createProduct, selectAllProducts, selectOneProduct} from "../controllers/productsControllers";

const productsRoutes = Router();

productsRoutes.post('/product', createProduct);
productsRoutes.get('/product', selectAllProducts);
productsRoutes.get('product/:id', selectOneProduct);

export default productsRoutes;