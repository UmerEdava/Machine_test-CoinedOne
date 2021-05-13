var express = require('express')
var router = express.Router()
var userHelper = require('../controller/userHelper')

router.get('/',(req,res)=>{
    console.log('connected to /')
    res.send('machine test...')
})

module.exports = router 