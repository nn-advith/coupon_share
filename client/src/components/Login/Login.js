import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, loginError, setLoginError } from '../../redux/slice/userSlice';

import { BodyContainer, Button, ErrorBanner, Input, Subhead, VerticalInputs } from '../Reusable/Reusable'

const Login = () => {

    const dispatch= useDispatch();
    let navigate = useNavigate();
    const loginE = useSelector(loginError)
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isEmpty, setIsEmpty] = useState(false)

    useEffect(() => {
      dispatch(setLoginError(0))
    }, [dispatch])

    const handleSubmit = () => {
      setIsEmpty(false)
      if(username === '' || password === ''){
        setIsEmpty(true)
      }else{

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
    }

  return (
    <>
    <BodyContainer>

        <Subhead>Login</Subhead>
        <VerticalInputs>

        <Input type="text" name="username" id="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
        <Input type="password" name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        </VerticalInputs>
        <Button onClick={handleSubmit}>Login</Button>

        <br/>
        {isEmpty ? <ErrorBanner>Please fill all details</ErrorBanner>: null}
        {loginE === 0 ? null : (loginE === 1 ? <ErrorBanner>User not found</ErrorBanner>: (loginE ===2 ? <ErrorBanner>Invalid password</ErrorBanner>: null))}
    </BodyContainer>
    </>

  )
}

export default Login