const express = require('express');
const hash = require('object-hash');

const UserModel = require('../models/UserModel/userModel');

const router = express.Router();


router.get("/" , (req, res) => {
    res.send("Server running")
});

router.post("/register", async(req, res) => {
    var body = req.body

    var newuser = new UserModel({
        name: body.name,
        username: body.username,
        password: hash.MD5(body.password),
        email: body.email,
    });

    try{
        await newuser.save();
        res.send({'200': 'Success'})
    } catch(err){
        console.log(err)
    }
})
    
module.exports = router;