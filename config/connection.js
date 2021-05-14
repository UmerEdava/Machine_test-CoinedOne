var mongoClient = require('mongodb').MongoClient

let state = {
    dbName: ""
}

module.exports = {
    connect: (done) => {
        const dbName = 'CoinedOneMachineTest'
        const url = process.env.MONGODBURL

        mongoClient.connect(url,(err,data)=>{
            if(err){
                return done(err)
            }else{
                state.dbName = data.db(dbName)
                done()
            }
        })
    },
    get: () => {
        return state.dbName
    }
}
