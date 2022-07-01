import React from 'react'
import { Button } from '../Reusable/Reusable'

const Login = () => {

    const handleSubmit = () => {
        console.log('Handle Submit')
    }

  return (
    <>
        <div>Login</div>
        <input type="text" name="username" id="username" placeholder='Username'/>
        <input type="password" name="password" id="password" placeholder='Placeholder'/>
        <Button onClick={handleSubmit}>Login</Button>
    </>

  )
}

export default Login