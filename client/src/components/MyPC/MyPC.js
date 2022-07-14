import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Reusable/Reusable';
import { useSelector } from 'react-redux';
import { loggedUser } from '../../redux/slice/userSlice';
import { myPC } from '../../api/api';

const MyPC = () => {

  const us = useSelector(loggedUser)
    const [mycoupons, setMycoupons] = useState([])

    useEffect(() => {
        var user = {
            id: us.id
        }
        myPC(user).then(res => {
          setMycoupons(res.data.coupons)
        })
    }, [us.id])

  return (
    <>
    <div>MyPC</div>
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

export default MyPC