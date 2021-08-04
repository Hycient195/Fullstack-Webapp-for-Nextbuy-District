import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './config/dbConnection.js'
import route from './routes/route.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 7000

/* Configuring .env file */
dotenv.config()

/* Starting up server and connecting to database */
app.listen(7000, ()=>{
    dbConnection()
    console.log(`Server started on port ${PORT}`)
})

/* Middleware */
app.use(express.json())
app.use(cors({
    origin : '*'
}))
app.use('/api/products', route)

/* For all 404 or invalid URLs */

