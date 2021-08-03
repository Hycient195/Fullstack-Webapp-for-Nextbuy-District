import mongoose from 'mongoose'

const connect = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_DB_URI,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useCreateIndex : true
        })
        console.log(`Sucessfully connected to database`)
    } catch (err) {
        console.log(`An error occoured in connecting to database ${err.message}`)
        process.exit(1)
    }
}

export default connect