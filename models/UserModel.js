import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : [true, 'First name is a rerquired field']
    },
    lastName : {
        type : String,
        required : [true, 'Last name is a rerquired field']
    },
    email : {
        type : String,
        required : [true, 'Email is a rerquired field']
    },
    password : {
        type : String,
        required : [true, 'Password is a required field'],
        minLength : [5, 'Password must be longer then 5 characters']
    }, 
    address : {
        type : String,
        required : [true, 'Address is a required field']
    },
    cart : [{
        item : {
            itemName : {
                type : String,
                required : true
            },
            itemPrice : {
                type : Number,
                required : true
            },
            itemQuantity : {
                type : Number,
                required : true
            }, 
            seller : {
                type : String,
                requiered : true
            }
        }
    }]
})

const User = mongoose.model('user', UserSchema)
export default User