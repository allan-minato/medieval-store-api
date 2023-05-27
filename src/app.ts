import express from 'express';
import productsRouter from './routers/product.router';
import orderRouter from './routers/order.router';

const app = express();

app.use(express.json());

app.use(productsRouter);
app.use(orderRouter);

export default app;
