import { Router } from 'express';
import orderController from '../database/controllers/order.controller';

const orderRouter = Router();

orderRouter.get('/orders', orderController.listOder);

export default orderRouter;