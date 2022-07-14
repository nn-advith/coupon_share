import axios from 'axios';

// const url = 'http://localhost:5000';

export const registerUser = (user) => axios({
    method: 'post',
    url: '/register',
    data: user
})

export const loginUser = (user) => axios({
    method: 'post',
    url: '/login',
    data: user
})

export const shareCoupon = (coupon) => axios({
    method: 'post',
    url: '/shareCoupon',
    data: coupon
});

export const getPublicCoupons = () => axios({
    method: 'get',
    url: '/getPublicCoupons',
});

export const claimCoupon = (info) => axios({
    method: 'post',
    url: '/claimCoupon',
    data: info
})

export const getTickets = (user) => axios({
    method: 'post',
    url: '/getTickets',
    data: user
});

export const myCoupons = (user) => axios({
    method: 'post',
    url: '/getMyCoupons',
    data: user
})

export const myPC = (user) => axios({
    method: 'post',
    url: '/getMyPC',
    data: user
})