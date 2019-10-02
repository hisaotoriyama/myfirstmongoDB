module.exports = function (mdb) {     
    return { 
        index: (req, res) => {
            mdb.db.collection('documents').find().toArray((err, docs) => {
                if (err) throw err
                res.status(200).send(docs)
            })
        },
        show: (req, res) => {
            let key = req.params.md
            console.log(req.params.md)
            mdb.db.collection('documents').find({
                key: {$eq: key}
            }).toArray((err, docs) => {
                if (err) throw err
                res.status(200).send(docs)
            })
        },        

         new: (req, res) => {},

         create:  (req, res) => {
            console.log("create Start") 
            let key = req.params.md
            let data = {
                "key": key,
                data: req.body
            }
            mdb.db.collection('documents').insertOne(data, (err, dr) => {
            if (err) throw err
            console.log("data inserted.")
            res.status(200).send({})
              }
          )},

         edit:  (req, res) => {},
          update: (req, res) => {
                let key = req.params.md
                mdb.db.collection('documents').update({key:key}, {$set:{data:req.body}}, (err, r) => {
                    if (err) throw err
                    res.status(200).send({})
                })
            },
            destroy: (req, res) => {
                let key = req.params.md
                mdb.db.collection('documents').deleteMany({key:key}, (err, r) => {
                    if (err) throw err
                    res.status(200).send({})
                })
            }
    }
 }