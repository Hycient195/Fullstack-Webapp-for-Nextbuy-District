import { LIKE, FETCH_PRODUCTS, DELETE, UPDATE, CREATE, SIGNUP, ADD_TO_CART } from '../actionTypes/actionTypes'
import * as api from '../api/api'

export const fetchProducts = () => async (dispatch) =>{
    console.log('from fetching products')

    try {
        const  { data }  = await api.getProducts()
        dispatch({type : FETCH_PRODUCTS, payload : data})
    } catch (error) {
        console.log(error)
    }
    
}

export const createPost = (post) => async(dispatch) =>{
    try {
        const { data } = await api.createPost(post)
        console.log(`this is data ${data}`)
        dispatch({type : CREATE, payload : data })
    } catch (error) {
        console.log(error.message)
    }
}

export const addToCart = (itemId) => async(dispatch) =>{
    console.log(itemId)
    try {
        const  data  = await api.addToCart(itemId)
        console.log('data')
        dispatch({type : ADD_TO_CART, payload : data})
    } catch (error) {
        console.log(error.message)
    }
}