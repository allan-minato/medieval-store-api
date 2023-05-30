import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const { body } = req;

  const create = await productService.createProduct(body);

  return res.status(201).json(create.dataValues);
}

async function listProduct(_req: Request, res: Response): Promise<Response> {
  const products = await productService.listProduct();

  return res.status(200).json(products);
}

export default {
  createProduct,
  listProduct,
};