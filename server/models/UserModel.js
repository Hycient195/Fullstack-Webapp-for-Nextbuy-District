import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : [true, 'First name is a rerquired field']
    },
    lastName : {
        type : String,
        required : [true, 'Last name is a rerquired field']
    },
    phoneNumber : {
        type : Number,
        unique : [true, 'This phone numer is already registered'],
        required : [true, 'Phone Number field is empty']
    },
    email : {
        type : String,
        unique : [true, 'This email is already registered'],
        required : [true, 'Email is a rerquired field']
    },
    password : {
        type : String,
        required : [true, 'Password is a required field'],
        minLength : [5, 'Password must be longer then 5 characters']
    }, 
    // address : {
    //     type : String,
    //     required : [true, 'Address is a required field']
    // },
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

UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('user', UserSchema)
export default User