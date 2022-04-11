import express from 'express';
import { createProduct, getAllProducts, searcProducts } from '../controllers/productController.js';


const productRouter = express.Router()


productRouter.route("/products").get(getAllProducts).post(createProduct)

productRouter.route("/search/:name").get(searcProducts)



export default productRouter