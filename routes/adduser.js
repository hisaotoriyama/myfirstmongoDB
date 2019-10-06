let express = require('express')
let router = express.Router()
// let db = require('../models/index')
module.exports = router;

// router.post('/',(req, res) => {
//     db.user_cookies.findOne({
//              where:{
//                  name: req.body.name
//             }
//     }).then((d) => {
//         if(d === null) {
//             // registration
//             console.log("regist")
//             db.user_cookies.create({
//                 name: req.body.name,
//                 password: req.body.password
//             }).then((r) => {
//                 res.cookie('login',true)
//                 res.cookie('name',req.body.loginName)
//                 res.redirect('/secure/todo.html')
//             })
//         } else { // go to login
//             console.log("login")
//             res.cookie('login',false)
//             res.redirect('/login.html')
//         }
//     })
// })


