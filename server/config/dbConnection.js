import mongoose from 'mongoose'

const connect = async ()=>{

    // const MONGO_DB_URL = "mongodb+srv://Hycient:password1234@cluster0.wujmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    try {

        mongoose.connect(process.env.MONGO_DB_URI,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useCreateIndex : true
        })
        mongoose.connection
            .once('open', ()=>{
                console.log(`Sucessfully connected to database`)
            })

    } catch (err) {
        console.log(`An error occoured in connecting to database ${err.message}`)
        process.exit(1)
    }
}

export default connect