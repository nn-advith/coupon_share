import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { BodyContainer, Button, Input, Label, NavButton, Subhead, VerticalInputs } from '../Reusable/Reusable';
import { loggedUser, getTickets } from '../../redux/slice/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import {BiArrowBack} from 'react-icons/bi'
import { shareCoupon } from '../../api/api';

const Share = () => {
  const user = useSelector(loggedUser)
  const dispatch = useDispatch();
  const [couponVal, setCouponVal] = useState('')
  const [couponName, setCouponName] = useState('');
  const [couponDesc, setCouponDesc] = useState('')
  const [couponExpiry, setCouponExpiry] = useState('')
  const [status, setStatus] = useState(0)
  const [isEmpty, setIsEmpty] = useState(false)

  const handleSubmit = () => {
    if (couponName === '' || couponVal === '' || couponExpiry === '' || couponDesc ===''){
      setIsEmpty(true)
      setStatus(0)
    }else{
      var coupon = {
        id: user.id,
        couponName : couponName,
        couponVal : couponVal,
        couponDesc: couponDesc,
        couponExpiry: couponExpiry
      }
      shareCoupon(coupon).then(res => {
        dispatch(getTickets({id: user.id}))
        
        setStatus(res.data.status);
        setCouponName('');
        setCouponVal('');
        setCouponDesc('');
        setCouponExpiry('')
        setIsEmpty(false)
      });
    }
    
  }


  return (
    <>
      <BodyContainer>
      <Link to="/dashboard" >
        <NavButton><BiArrowBack/></NavButton>
      </Link>
      <Subhead>Share a Coupon</Subhead>
      <VerticalInputs>
      <Label>Coupon Issuer</Label>
      <Input type="text" name="coupon_name" id="coupon_name" placeholder='Coupon Issuer' value={couponName} onChange={(e) => setCouponName(e.target.value)} />
      <Label>Coupon Description</Label>
      <Input type="text" name="coupon_desc" id="coupon_desc" placeholder='Coupon Description' value={couponDesc} onChange={(e) => setCouponDesc(e.target.value)} />
      <Label>Coupon expiry date</Label>
      <Input type="date" name="coupon_expiry" id="coupon_expiry" placeholder='Expiry Date' value={couponExpiry} onChange={(e) => setCouponExpiry(e.target.value)} />
      <Label>Coupon Code</Label>
      <Input type="text" name="coupon_val" id="coupon_val" placeholder='Coupon Code' value={couponVal} onChange={(e) => setCouponVal(e.target.value)} />
      </VerticalInputs>
      <Button onClick={handleSubmit}>Share</Button>
      {isEmpty ? <p>Please fill all details</p>: null}
      {status === 0? null: (status === 1 ? <div >Inserted Sucessfully</div> : <div >Unable to insert coupon</div>) }
      </BodyContainer>
    </>
  )
}

export default Share