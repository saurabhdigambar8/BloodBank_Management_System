const express=require('express')
const dotenv=require('dotenv')
dotenv.config()
const colors=require('colors')
const morgan=require('morgan')
const cors=require('cors')
const { dbConnect } = require('./config/db')
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
dbConnect()
const PORT=process.env.PORT || 8080
app.get('/',(req,res)=>{
    res.send('Welcome to blood bank app')
})
app.listen(PORT,()=>{
    console.log(`server is listning on ${process.env.PORT}`.bgGreen.white);
})