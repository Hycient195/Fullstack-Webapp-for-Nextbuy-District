import  {FETCH_PRODUCTS, CREATE, DELETE, UPDATE, LIKE, SIGNUP} from '../actionTypes/actionTypes'


export default (state = [], action) =>{

    switch(action.type){
        case  FETCH_PRODUCTS:
            return action.payload
            
        case CREATE:
            return [...state, action.payload]
        default : 
            return state
    }
}
