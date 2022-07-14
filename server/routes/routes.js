const express = require('express');
const hash = require('object-hash');

const UserModel = require('../models/UserModel/userModel');
const pCModel = require('../models/pCModel/pCModel.js')

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
        tickets: 0,
        myCoupons: [],
        myPublicCoupons: [], 
    });

    UserModel.findOne({username: body.username} , (err, data) => {
        if(data){
            res.send({
                'error': 'user_exists'
            })
        }else{
            try{
                newuser.save(function(err, result) {
                    res.send({
                        'id': result._id,
                        'user': result.username,
                        'name': result.name,
                        'tickets': result.tickets
                    })
                });
               

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
                        'id': data[0]._id,
                        'user': data[0].username,
                        'name': data[0].name,
                        'tickets': data[0].tickets
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
});

router.post('/shareCoupon', (req, res) => {
    var coupon = req.body;
    var newCoupon = new pCModel({
        id: coupon.id,
        couponName: coupon.couponName,
        couponVal: coupon.couponVal
    });

    newCoupon.save(function(err, result) {
        if(err){
            res.send({
                'status': -1
            })
        }else{
            UserModel.findOne({_id: coupon.id}).then(doc => {
                cou = doc.myPublicCoupons
                tickets = doc.tickets
                cou.push(result)
                tickets = tickets + 10;

                doc.myPublicCoupons = cou;
                doc.tickets = tickets
                doc.save((err, r) => {
                    if(err){
                        res.send({
                            'status': -1
                        })
                    }else{
                        res.send({
                            'status': 1
                        })
                    }
                })

            })
        }
    })
});

router.get('/getPublicCoupons', (req, res) => {
    pCModel.find({}, (err, result) => {
        if(!err) {
            if(result){
                res.send({
                    coupons: result
                })
            }
        }
    })
});


router.post("/claimCoupon", (req, res) => {
    var {userId, coupon} = req.body;
    
    UserModel.findOne({_id: userId}).then(user => {
        cou = user.myCoupons
        tickets = user.tickets
        if (tickets < 20){
            res.send({
                'status': 2
            })
        }else{

        cou.push(coupon)
        tickets = tickets - 20
        user.tickets = tickets
        user.myCoupons = cou;
        user.save((err, result) => {
            if(err){
                res.send({
                    'status': -1
                })
            }else{
                pCModel.findOneAndRemove({_id: coupon._id}, (err, result) => {
                    if(!err){
                        res.send({
                            'status': 1
                        })
                    }
                })
                
            }
        })
        
        }
    })

});

router.post('/getTickets', (req, res) => {
    var user = req.body;
    UserModel.findOne({_id: user.id}, (err, results) => {
        if(!err){
            res.send({
                'tickets': results.tickets
            })
        }  
    })
});


router.post('/getMyCoupons', (req, res) => {
    var user = req.body;
    UserModel.findOne({_id: user.id} , (err, results) => {
        if(!err){
            myc = results.myCoupons
            res.send({
                coupons: myc
            })
        
        }
    })
});


router.post('/getMyPC', (req, res) => {
    var user = req.body;
    UserModel.findOne({_id: user.id}, (err, results) => {
        if(!err){
            mypc = results.myPublicCoupons
            res.send({
                coupons: mypc
            })
        }
    })
})
    
module.exports = router;