import express from 'express'
import authenticator from '../middleware/authenticator.js'

import { getProductList, getSingleProductById, addProduct, getProductDetailed } from '../controllers/productController.js'
const router = express.Router()


router.route('/')
    .get(authenticator, getProductDetailed)
    .post(addProduct)

router.route('/list')
    .get(getProductList)

router.route('/:id')
    .get(getSingleProductById)

export default router