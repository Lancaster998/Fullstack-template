import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Router from './routes/route.js'
import connectDB from './db/connection.js'
import cookieParser from 'cookie-parser'
import loggerMiddleware from './middleware/middleware.js'

const app = express()

dotenv.config()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: (origin, callback) => {
        callback(null, origin || '*');
    },    
    credentials: true 
}));

app.use('/api/route', loggerMiddleware, Router)

connectDB(process.env.CONNECTION_STRING)
    .then(
        app.listen(3001, () => {
            console.log('server has started')
        })
    )
    .catch(err => {
        console.log(err)
    })