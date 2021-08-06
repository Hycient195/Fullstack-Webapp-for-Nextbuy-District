import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './config/dbConnection.js'
import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 7001

/* Configuring .env file */
dotenv.config()

/* Starting up server and connecting to database */
app.listen(PORT, ()=>{
    dbConnection()
    console.log(`Server started on port ${PORT}`)
})

app.set('json spaces', 2)

/* Middleware */
app.use(express.json())
app.use(cors({
    origin : '*',
    methods : [ 'GET', 'POST', 'PUT', 'DELETE' ],
}))
app.use('/api/products', productRoute)
app.use('/api/users', userRoute )

/* For all 404 or invalid URLs */

