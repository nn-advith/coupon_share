import React from 'react';
import { useSelector } from 'react-redux';
import { loggedUser } from '../../redux/slice/userSlice';

const Dashboard = () => {

  const user = useSelector(loggedUser)

  return (
    <>
    <div>Dashboard</div>
    <hr/>
    {/* <div>{user.username}</div> */}
    </>
  )
}

export default Dashboard