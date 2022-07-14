import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userExists, registerUser } from '../../redux/slice/userSlice';

import { Button } from '../Reusable/Reusable';

const Register = () => {

    const userE = useSelector(userExists)
    const dispatch= useDispatch();
    let navigate = useNavigate();

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('');
    const [isEmpty, setIsEmpty] = useState(false)

    const handleSubmit = () => {

      if(name === '' || username==='' || email === '' || password === '' || checkPassword === ''){
        setIsEmpty(true)
      }else{
      
        if(password === checkPassword){
            var nuser = {
              'name': name,
              'username': username,
              'email': email,
              'password': password
            }

            dispatch(registerUser(nuser)).then((e) =>  {
              if(!e.payload.error)
              {
                setIsEmpty(false)
                navigate("/dashboard")
                
              }
            });    
        }else{
          console.log('Passwords dont match')
        }
          
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

        <br/>
        {isEmpty ? <p>Please fill all details</p>: null}
        {userE ? <div>username exists</div> : null}
    </>

  )
}

export default Register