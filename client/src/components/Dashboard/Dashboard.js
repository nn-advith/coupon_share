import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { loggedUser } from '../../redux/slice/userSlice';
import Profile from '../Profile/Profile';


const Dashboard = () => {

  const user = useSelector(loggedUser)
  return (
    <>
    <p>
      {user._id}
    </p>
    <React.Fragment>
         <Profile />    
      <hr/>
      <Outlet/>
    </React.Fragment>
    

    </>
  )
}

export default Dashboard