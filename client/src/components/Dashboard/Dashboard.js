import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { loggedUser } from '../../redux/slice/userSlice';
import Profile from '../Profile/Profile';
import { BodyContainer } from '../Reusable/Reusable';


const Dashboard = () => {

  const user = useSelector(loggedUser)
  return (
    <>
    <BodyContainer>

    <React.Fragment>
         <Profile />    
      <hr/>
      <Outlet/>
    </React.Fragment>
    
    </BodyContainer>

    </>
  )
}

export default Dashboard