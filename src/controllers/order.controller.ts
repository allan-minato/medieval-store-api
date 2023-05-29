import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function listOder(req: Request, res: Response): Promise <Response> {
  const foundOrder = await orderService.listOrder();

  return res.status(200).json(foundOrder);
}

export default {
  listOder,
};