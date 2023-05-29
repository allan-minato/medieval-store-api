import ProductModel from '../database/models/product.model';
import OrderModel from '../database/models/order.model';

const listOrder = async (): Promise<{ id: number; userId: number; productIds: number[]; }[]> => {
  const products = (await ProductModel.findAll());
  const orders = (await OrderModel.findAll());
  const newOrderArr: { id: number, userId: number, productIds: number[] }[] = [];
  orders.forEach(({ dataValues: { id, userId } }) => {
    newOrderArr.push({
      id,
      userId,
      productIds: products
        .filter(
          (prod) => prod.dataValues.orderId === id,
        )
        .map((prod) => prod.dataValues.id),
    });
  });
  return newOrderArr;
};

export default {
  listOrder,
};
