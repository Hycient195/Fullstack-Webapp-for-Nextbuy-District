import axios from 'axios'

const productUrl = 'http://localhost:7001/api/products'
const userUrl = 'http://localhost:7001/api/users'

export const signup = (user) => axios.post(userUrl, user)

export const getProducts = () => axios.get(productUrl)

export const likePost = (id) => axios.patch(`${productUrl}/${id}/likePost`)
export const deletePost = (id) => axios.delete(`${productUrl}/${id}`)
export const createPost = (newProduct) => axios.post(productUrl, newProduct)
export const updatePost = (id, updatedProduct) => axios.patch(`${productUrl}/${id}`, updatedProduct)