var db = require('../config/connection')
var collection = require('../config/collection')

module.exports = {  
    testApi: () => {
        return new Promise(async (resolve, reject) => {
            let test = await db.get().collection(collection.FAMILY).aggregate([{
                    $project: {
                        parents: '$parents',
                        children: '$children',
                        numberOfParents: {
                            $size: '$parents'
                        },
                        numberOfChildren: {
                            $size: '$children'
                        }
                    }
                },{
                    $match: {
                        $and:[
                            {
                                numberOfParents:{
                                    '$gte':2
                                }
                            },
                            {
                                numberOfChildren:{
                                    '$gte':4
                                }
                            }
                        ]
                    }
                },{
                    $lookup:{
                        from:collection.CHILD,
                        localField:'children',
                        foreignField:'name',
                        as:'children'
                    }
                },{
                    $project:{
                        _id:0,
                        familyId:'$_id',
                        children:1, 
                    }
                }])
                .toArray()
            console.log('***', test)
            resolve(test)
        })
    }
}