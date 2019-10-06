const express = require("express")
const resource = require('express-resource')
const app = express()
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const assert = require('assert') 


let adduser = require('./routes/adduser')
let login = require('./routes/login')
app.use('/adduser',adduser)
app.use('/login',login)


var mdb = {}
MongoClient.connect('mongodb://admin:password@127.0.0.1:27017/',
  {useNewUrlParser: true, useUnifiedTopology: true},
  (err, db) =>
    {  assert.equal(null, err)
       console.log("Connected successfully to mongodb")
       mdb.db = db.db("myDB")
    }
) 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.resource('mds', require('./controllers/mdata')(mdb), {key:'key'})

app.listen(3040)