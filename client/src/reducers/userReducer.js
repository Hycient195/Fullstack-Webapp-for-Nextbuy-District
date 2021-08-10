import  {FETCH_ALL, CREATE, DELETE, UPDATE, LIKE, SIGNUP} from '../actionTypes/actionTypes'


export default (state = [], action) =>{

    switch(action.type){
        case  SIGNUP:
            return action.payload
        default : 
            return state
    }
}
