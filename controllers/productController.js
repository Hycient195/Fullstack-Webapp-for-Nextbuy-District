import ProductModel from '../models/ProductModel.js'
import asyncHandler from 'express-async-handler'


/* Fetching all the products in the product list */
const getProducts = asyncHandler(async(req, res)=>{
    const product = await ProductModel.find({})

    if(product){
        res.status(200)
        // res.send(product)
        res.json(product)
    }else{
        res.status(404)
        throw new Error('No products Avaliable')
    }
})

/* Fetching a single product and its details */
const getSingleProductById = asyncHandler(async(req, res)=>{

    // The product ID of the particular product is passed in the url
    const { productId } = req.params.id
    const foundProduct = await ProductModel.findById(productId)

    if(foundProduct){
        res.status(200)
        res.send(foundProduct)
        // res.json(foundProduct)
    }else{
        res.status(404)
        throw new Error('The requested product does not exist')
    }
})

const addProduct = asyncHandler(async(req, res)=>{
    const {itemName, itemPrice, itemQuantity, seller } = req.body

    try {
        const product = await ProductModel.create({
            itemName, itemPrice, itemQuantity, seller
        })
        res.status(200)
        console.log([product])
        res.send(product)
        // res.json(product)
    } catch (err) {
        res.status(404)
        throw new Error('Unable to add new product')
    }

})
export { getProducts, getSingleProductById, addProduct }