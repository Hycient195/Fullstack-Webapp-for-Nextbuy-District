import { LIKE, FETCH_ALL, DELETE, UPDATE, CREATE, SIGNUP, LOGIN, AUTHENTICATE, LOGOUT } from '../actionTypes/actionTypes'
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