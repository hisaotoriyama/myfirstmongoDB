const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const assert = require('assert') 

var mdb = null
MongoClient.connect('mongodb://admin:password@127.0.0.1:27017/',
  {useNewUrlParser: true, useUnifiedTopology: true},
  (err, db) =>
    {  assert.equal(null, err)
            console.log("Connected successfully to mongodb")
            mdb = db.db("myDB")
    }
) 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


  // ここにmongoの処理を書く
  app.post("/mongo", (req, res) => {
    let key = req.query.key
    let data = {
        "key": key,
        data: req.body
    }
    mdb.collection('documents').insertOne(data, (err, dr) => {
        if (err) throw err
        console.log("data inserted.")
        res.status(200).send({})
    })
  }) 


app.listen(3005)