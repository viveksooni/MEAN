const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const User=require("./models/user")
const Admin=require("./models/admin")
const path =require("path")
const mongoose=require("mongoose")
mongodb = require('mongodb')
const session = require('express-session')
const Product = require("./models/product")
const api = require("./src");

//000000000000000000000000000000 CONECTION WITH DATABASE 00000000000000000000000000000
const connection=mongoose.connect("mongodb+srv://nikhilmy:nikhilmongoose@cluster0.73nxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
    console.log("conected to the databse");
})
.catch(()=>{
    console.log("connection not established ERROOOROOROORORR")
})

//0000000000000000000000000000000000000   MIDDLEWARES 00000000000000000000000000000000000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(session({secret:'Keep it secret'
,name:'uniqueSessionID'
,saveUninitialized:false}))

app.use('/public', express.static(path.join(__dirname, 'upload'))
)

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS")
    next();
})


//


app.use("/api",api);

module.exports = app;
