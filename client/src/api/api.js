import axios from 'axios'

const API = axios.create({ baseURL : 'http://localhost:7001/api' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const getProducts = () => API.get('/products')
export const signUp = (user) => API.post(`users/sign-up`, user)
export const signIn = (user) => API.post(`users/sign-in`, user)
export const addToCart = (itemId) => API.post(`users/add_to_cart`, itemId)
export const fetchUserCart = (userId) => API.post(`users/fetch_user_cart`, userId)



// export const likePost = (id) => API.patch(`${productUrl}/${id}/likePost`)
// export const deletePost = (id) => API.delete(`${productUrl}/${id}`)
export const createPost = (newProduct) => API.post('/products', newProduct)
// export const updatePost = (id, updatedProduct) => API.patch(`${productUrl}/${id}`, updatedProduct)