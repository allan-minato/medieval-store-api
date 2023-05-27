import { Product } from 'src/types/Product';
import OrderModel from '../models/order.model';

async function listOrder(): Promise<unknown> { 
  const foundOrder = await OrderModel.findAll({
    include: 'productIds',
  });
    
  return foundOrder.map((order) => {
    const { id, userId, productIds } = order.toJSON();
    const orderWithProductIds = (productIds as Product[] | undefined)
      ?.map((product) => product.id) || [];
    return { id, userId, productIds: orderWithProductIds };
  });
}

export default {
  listOrder,
};
