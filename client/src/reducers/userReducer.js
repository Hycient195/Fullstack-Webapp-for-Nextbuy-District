import  {FETCH_ALL, CREATE, DELETE, UPDATE, LIKE, SIGNUP, LOGIN, LOGOUT, AUTHENTICATE} 
        from '../actionTypes/actionTypes'


const userReducer = (state = { authData : null }, action) =>{

    switch(action.type){
        case  AUTHENTICATE:
            console.log('this is from userReducer')
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData : action?.data}
 
        case LOGOUT : 
            localStorage.clear()
        default : 
            return state
    }
}

export default userReducer
