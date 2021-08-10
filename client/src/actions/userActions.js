import { LIKE, FETCH_ALL, DELETE, UPDATE, CREATE, SIGNUP } from '../actionTypes/actionTypes'
import * as api from '../api/api'


export const signup = (userdata) => async(dispatch) =>{
    console.log('from user actions')
    
    try {
        const user = await api.signup(userdata)
        console.log(user)
        dispatch({type : SIGNUP, payload : user})
    } catch (error) {
        console.log(error.message)
    }
}