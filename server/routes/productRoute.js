import express from 'express'

import { getProductList, getSingleProductById, addProduct,getProductDetailed } from '../controllers/productController.js'
const router = express.Router()

router.route('/')
    .get(getProductDetailed)
    .post(addProduct)

router.route('/list')
    .get(getProductList)

router.route('/:id')
    .get(getSingleProductById)

export default router