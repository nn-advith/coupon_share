const express = require('express');
const hash = require('object-hash');

const UserModel = require('../models/UserModel/userModel');

const router = express.Router();


router.get("/" , (req, res) => {
    res.send("Server running")
});

router.post("/register", (req, res) => {
    var body = req.body

    var newuser = new UserModel({
        name: body.name,
        username: body.username,
        password: hash.MD5(body.password),
        email: body.email,
    });

    UserModel.findOne({username: body.username} , (err, data) => {
        if(data){
            res.send({
                'error': 'user_exists'
            })
        }else{
            try{
                newuser.save();
                res.send({
                    'user': body.username,
                    'name': body.name     
                })
            } catch(err){
                console.log(err)
            }
        }
    })

    
});

router.post("/login", (req, res) => {
    var body = req.body;

    UserModel.find({username: body.username}, (err, data) => {
        if(!err){
            if(data){
                if(hash.MD5(body.password) === data[0].password){
                    console.log(data[0])
                    res.send({
                        'user': data[0].username,
                        'name': data[0].name     
                    })
                }else{
                    res.send({
                        'error': 'invalid_credentials'
                    })
                }
            }else{
                res.send({
                    'error': 'no_user'
                })
            }
        }
    })
})
    
module.exports = router;