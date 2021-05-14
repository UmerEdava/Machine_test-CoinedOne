var express = require('express')
var router = express.Router()
var userHelper = require('../controller/userHelper')

router.get('/', (req, res) => {
    userHelper.testApi().then((test)=>{
        res.json(test)
    })
})   

module.exports = router