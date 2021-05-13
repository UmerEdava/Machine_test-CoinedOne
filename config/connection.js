var mongoClient = require('mongodb').MongoClient

let state = {
    dbName: ""
}

module.exports = {
    connect: (done) => {
        const dbName = 'CoinedOneMachineTest'
        const url = 'mongodb+srv://Harikrishnan_midhun:classAccess1234@classaccess-cluster1.9hild.mongodb.net/ca_db?retryWrites=true&w=majority'

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
