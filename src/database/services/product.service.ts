import { Product } from 'src/types/Product';
import { Model } from 'sequelize';
import ProductModel, { ProductInputtableTypes } from '../models/product.model';

async function createProduct(
  product: ProductInputtableTypes,
): Promise<Model<Product, ProductInputtableTypes>> {
  const create = await ProductModel.create(product);

  return create;
}

async function listProduct(): Promise<Model<Product, ProductInputtableTypes>[]> {
  const foundProducts = await ProductModel.findAll();

  return foundProducts;
}

export default {
  createProduct,
  listProduct,
};