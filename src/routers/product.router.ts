import { Router } from 'express';
import productController from '../controllers/product.controller';
import productsMiddleware from '../database/middlewares/validateProducts';

const productsRouter = Router();

productsRouter.post(
  '/products',
  productsMiddleware.validateProduct,
  productsMiddleware.validatePrice, 
  productController.createProduct,
);
productsRouter.get('/products', productController.listProduct);

export default productsRouter;
