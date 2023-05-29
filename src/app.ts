import express from 'express';
import productsRouter from './routers/product.router';
import orderRouter from './routers/order.router';
import orderLogin from './routers/login.router';

const app = express();

app.use(express.json());

app.use(productsRouter);
app.use(orderRouter);
app.use(orderLogin);

export default app;
