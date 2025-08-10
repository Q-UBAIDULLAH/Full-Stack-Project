import express from "express"
import mongoose from "mongoose"
import 'dotenv/config.js'
import MainRoutes from './src/routes/index.js'

const app=express()

app.use(express.json())

const url=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@qazicluster.uvdks6f.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=QaziCluster`
mongoose.connect(url)
mongoose.connection.on('open',()=>{
console.log("Database Connected")
})


app.use('/api',MainRoutes)

app.listen(3000,(req,res)=>{
console.log("Server is Running On Port 3000")
})