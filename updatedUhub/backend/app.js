const express = require('express')
const app = express()
require("dotenv").config();
//use in front end handeling like req.body.name
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
//Middlewares
app.use(bodyParser.json());

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//my routes
const authRoutes = require('./routers/auth') 

//my routes 
app.use('/api',authRoutes)


const port= process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`erver is runing on port ${port}`)
})