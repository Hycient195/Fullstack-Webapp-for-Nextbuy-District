import { LOGIN, AUTHENTICATE, LOGOUT, FETCH_USER_CART, REMOVE_ITEM_FROM_CART } from '../actionTypes/actionTypes'
import * as api from '../api/api'


export const signup = (userdata, history) => async(dispatch) =>{
    
    try {

        const {data} = await api.signUp(userdata)
        dispatch({type : AUTHENTICATE,  data })

        console.log(data)

        history.push('/')
    } catch (error) {
        console.log(error.message)
    }
}

export const login = (user, history) => async(dispatch)=>{
    try {
        const {data} = await api.signIn(user)
        console.log(data)
        dispatch({type : AUTHENTICATE, data})
        
        history.push('/')
    } catch (error) {
        console.log(error.message)
    }
}

export const logout = (history) => async(dispatch) =>{
    try {
        dispatch({type : LOGOUT})
        history.push('/')
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchUserCart = (userId) => async(dispatch) =>{
    try {
        const { data } = await api.fetchUserCart(userId)
        // console.log(data)
        dispatch({type : FETCH_USER_CART, payload : data})
    } catch (error) {
        
    }
}

export const removeItemFromCart = (itemIndex, userId) => async(dispatch) =>{
    try {
        const {data}  = await api.removeItemFromCart(itemIndex, userId)
        console.log(data)
        dispatch({type : REMOVE_ITEM_FROM_CART, payload : data})
    } catch (error) {
        console.log(error)
    }
}