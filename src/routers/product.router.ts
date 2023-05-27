import { Router } from 'express';
import productController from '../database/controllers/product.controller';

const productsRouter = Router();

productsRouter.post('/products', productController.createProduct);
productsRouter.get('/products', productController.listProduct);

export default productsRouter;