import express from 'express'

import { getProducts, getSingleProductById, addProduct } from '../controllers/productController.js'
const router = express.Router()

router.route('/')
    .get(getProducts)
    .post(addProduct)

router.route('/:id')
    .get(getSingleProductById)

export default router