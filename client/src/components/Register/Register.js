import React, {useState} from 'react';
import axios from 'axios'

import { Button } from '../Reusable/Reusable';

const Register = () => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')

    const handleSubmit = () => {
        console.log(name, username, email, password, checkPassword);

        if(password === checkPassword){
            var user = {
              'name': name,
              'username': username,
              'email': email,
              'password': password
            }

            axios({
              method: 'post',
              url: '/register',
              data: user
            }).then((res) => console.log(res));
        }else{
          console.log('Passwords dont match')
        }
    }

  return (
    <>
        <div>Register</div>
        <input type="text" name="name" id="name" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="username" id="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
        <input type="email" name="email" id="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        <input type="password" name="checkpassword" id="checkpassword" placeholder='Confirm Password' onChange={(e) => setCheckPassword(e.target.value)}/>
        <Button onClick={handleSubmit}>Register</Button>
    </>

  )
}

export default Register