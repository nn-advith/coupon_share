const mongoose =  require('mongoose');

const pCSchema = new mongoose.Schema({
    id: String,
    couponName: String,
    couponVal: String,
    couponDesc: String,
    couponExpiry: String
});

const pCModel = mongoose.model('pubCoupons', pCSchema);

module.exports = pCModel;