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