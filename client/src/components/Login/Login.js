import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, loginError } from '../../redux/slice/userSlice';

import { Button } from '../Reusable/Reusable'

const Login = () => {
    const dispatch= useDispatch();
    let navigate = useNavigate();
    const loginE = useSelector(loginError)
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
      var userL = {
        'username': username,
        'password': password
      }
      dispatch(loginUser(userL)).then((e) => {
        if(!e.payload.error)
        {
          navigate("/dashboard")
        }
      })
    }

  return (
    <>
        <div>Login</div>
        <input type="text" name="username" id="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" name="password" id="password" placeholder='Placeholder' onChange={(e) => setPassword(e.target.value)}/>
        <Button onClick={handleSubmit}>Login</Button>

        <br/>
        {loginE === 0 ? null : (loginE === 1 ? <div>User not found</div>: (loginE ===2 ? <div>Invalid password</div>: null))}
    </>

  )
}

export default Login