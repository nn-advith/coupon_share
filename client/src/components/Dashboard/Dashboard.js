import React from 'react';
import { useSelector } from 'react-redux';
import { loggedUser } from '../../redux/slice/userSlice';
import { Button } from '../Reusable/Reusable';
import Profile from "./Profile"
//import { MDBCol } from 'mdb-react-ui-kit';

const Dashboard = () => {

  const user = useSelector(loggedUser)
  return (
    <>
    <p>
      {user._id}
    </p>
    <React.Fragment>
      <td className='profile'>
         <Profile user={user.name}/>
      </td>
      <td className='non_profile'>
        <div className='share'>
          <Button>Share a Coupon</Button>
        </div><br/>
        <div className='view'>
          <Button>View public coupons</Button>
        </div>
      </td>
    </React.Fragment>
    </>
  )
}

export default Dashboard