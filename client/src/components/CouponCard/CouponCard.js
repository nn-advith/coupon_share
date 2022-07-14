import React from 'react';
import {Button} from '../Reusable/Reusable';
import {getTickets, loggedUser} from '../../redux/slice/userSlice';
import {setClaimed} from '../../redux/slice/couponSlice'
import { useDispatch, useSelector } from 'react-redux';
import { claimCoupon } from '../../api/api';


const CouponCard = ({ coupon}) => {

    const user = useSelector(loggedUser);
    const dispatch = useDispatch();
    const handleClaim = () => {
    
        if (coupon.id === user.id){
        }else{
            var info = {
                userId: user.id,
                coupon: coupon
            }
            claimCoupon(info).then(res => {
                dispatch(getTickets({id: user.id}))
                if(res.data.status === 2){
                    alert('Not enough tickets')
                }else{
                    dispatch(setClaimed())
                }
            })
        }
    }

  return (
    <>
        <h5>{coupon.couponName}</h5>
        {coupon.id === user.id ?<p>Your public coupon</p> : null}
        <Button onClick={ (coupon.id === user.id ) ? null : handleClaim}>Claim</Button>
        <hr/>
    </>
  )
}

export default CouponCard