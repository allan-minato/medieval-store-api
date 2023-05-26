import { Product } from 'src/types/Product';
import { Model } from 'sequelize';
import ProductModel, { ProductInputtableTypes } from '../models/product.model';

async function createProduct(
  product: ProductInputtableTypes,
): Promise<Model<Product, ProductInputtableTypes>> {
  const create = await ProductModel.create(product);
  
  return create;
}

export default {
  createProduct,
};