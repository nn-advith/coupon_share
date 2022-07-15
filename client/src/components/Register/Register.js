import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userExists, registerUser } from '../../redux/slice/userSlice';

import { BodyContainer, Button, ErrorBanner, SucessBanner, Input, Subhead, VerticalInputs } from '../Reusable/Reusable';



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
    const [passMatch, setPassMatch] = useState(false)

    const handleSubmit = () => {

      setIsEmpty(false)
      setPassMatch(false)
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
          setPassMatch(true)
        }
          
      }

    }

  return (
    <>
    <BodyContainer>

        <Subhead>Register</Subhead>
        <VerticalInputs>

        <Input type="text" name="name" id="name" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
        <Input type="text" name="username" id="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
        <Input type="email" name="email" id="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <Input type="password" name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        <Input type="password" name="checkpassword" id="checkpassword" placeholder='Confirm Password' onChange={(e) => setCheckPassword(e.target.value)}/>
        </VerticalInputs>
        <Button onClick={handleSubmit}>Register</Button>

        <br/>
        {isEmpty ? <ErrorBanner>Please fill all details</ErrorBanner>: null}
        {userE ? <ErrorBanner>Username already exists</ErrorBanner> : null}
        {passMatch ? <ErrorBanner>Passwords don't match</ErrorBanner> : null}
    </BodyContainer>
    </>

  )
}

export default Register