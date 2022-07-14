import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Reusable/Reusable';
import { useSelector } from 'react-redux';
import { loggedUser } from '../../redux/slice/userSlice';
import { myCoupons } from '../../api/api';

const MyCoupons = () => {

    const us = useSelector(loggedUser)
    const [mycoupons, setMycoupons] = useState([])

    useEffect(() => {
        var user = {
            id: us.id
        }
        myCoupons(user).then(res => {
          setMycoupons(res.data.coupons)
        })
    }, [us.id])

  return (
    <>
    <div>My Coupons</div>
    <Link to="/dashboard" >
        <Button>Back</Button>
      </Link>
      <hr/>
      {mycoupons.map((i, key) => (
        <div key={key}>
          <h4>{i.couponName}</h4>
          <h5>{i.couponVal}</h5>
          <br/>
        </div>
      ))}
    </>
  )
}

export default MyCoupons