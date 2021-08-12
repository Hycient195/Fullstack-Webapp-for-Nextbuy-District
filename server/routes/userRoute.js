import express from 'express'
import { getUsers, signUp, signIn, addToCart } from '../controllers/userController.js'

const router = express.Router()

router.route('/')
    .get(getUsers)

router.route('/sign-in')
    .post(signIn)

router.route('/sign-up')
    .post(signUp)

router.route('/add_to_cart')
    .post(addToCart)

export default router