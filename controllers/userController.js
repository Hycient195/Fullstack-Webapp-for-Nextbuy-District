import UserModel from '../models/UserModel.js'
import asyncHandler from 'express-async-handler'

const getUsers = asyncHandler(async(req, res) =>{
    const user = await UserModel.find({})

    if(user){
        res.status(200).json(user)
    }else{
        res.status(404)
        throw new Error('Unable to fetch users')
    }
})

const createUser = asyncHandler(async(req, res) =>{
    const { firstName, lastName, email, password, address } = req.body

    try {
        const user = await UserModel.create({
            firstName, lastName, email, password, address
        })
        console.log(user)
        res.status(200).json(user)
    } catch (err) {
        res.status(404)
        throw new Error('Unable to fetch user')
    }
})

export { createUser, getUsers}