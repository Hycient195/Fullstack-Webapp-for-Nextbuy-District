import UserModel from '../models/UserModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utilities/generateToken.js'

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

    const { firstName, lastName, phoneNumber, email, password } = req.body

    const userExists = await UserModel.findOne({email})
    if(userExists){

        res.status(400)
        throw Error('User already Exists')

    }else{

        try {
            const user = await UserModel.create({
                firstName, lastName, phoneNumber, email, password
            })
            // console.log(user)
    
            res.status(200).json({
                _id : user._id,
                firstName : user.firstName,
                lastName : user.lastName,
                phoneNumber : user.phoneNumber,
                email : user.email,
                token : generateToken(user._id)
            })
            console.log(`User logged in with token ${generateToken(user_id)}`)
        } catch (err) {
            res.status(404)
            throw new Error('Unable to Create user')
        }
    }


    
})

export { createUser, getUsers}