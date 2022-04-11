import express from 'express';
import productRouter from './routes/productRoutes.js';

const app = express()


app.use(express.json())

app.use("/api/v1",productRouter)

export default app

