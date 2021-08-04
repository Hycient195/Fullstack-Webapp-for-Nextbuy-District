import mongoose from 'mongoose'

const connect = async ()=>{
    try {
        console.log(process.env.MONGO_DB_URL)
        mongoose.connect(process.env.MONGO_DB_URL,{
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