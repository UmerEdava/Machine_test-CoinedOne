var express = require('express')
var path = require('path')
var userRouter = require('./routes/user')
require('dotenv').config()

var app = express()
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/',userRouter)

var PORT = process.env.PORT || 3000

app.listen(3000,()=>{
    console.log('Server running successfully on port: '+PORT)
})