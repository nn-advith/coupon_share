const mongoose =  require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String,
    tickets: Number,
    myCoupons: Array,
    myPublicCoupons: Array,
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;