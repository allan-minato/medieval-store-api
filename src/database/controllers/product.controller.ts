import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const { body } = req;
  // if (!body.name || !body.price || !body.orderId) {
  //   return res.status(400).json({ message: 'One or more properties are missing.' });
  // }
  const create = await productService.createProduct(body);

  return res.status(201).json(create);
}

async function listProduct(_req: Request, res: Response): Promise<Response> {
  const products = await productService.listProduct();

  return res.status(200).json(products);
}

export default {
  createProduct,
  listProduct,
};