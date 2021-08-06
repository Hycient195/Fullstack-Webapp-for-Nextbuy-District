import express from 'express'

import { getProductList, getSingleProductById, addProduct,getProductDetailed } from '../controllers/productController.js'
const router = express.Router()

router.route('/')
    .get(getProductList)
    .post(addProduct)

router.route('/detailed')
    .get(getProductDetailed)

router.route('/:id')
    .get(getSingleProductById)

export default router