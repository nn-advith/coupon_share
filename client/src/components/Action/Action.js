import React from 'react';
import { Button } from '../Reusable/Reusable';
import { Link } from 'react-router-dom';

const Action = () => {
  return (
    <>
    <br></br>   
        <div className='share'>
        <Link to="share" >
          <Button>Share a Coupon</Button>
        </Link>
        </div><br/>
        <div className='view'>
        <Link to="view">
          <Button>View public coupons</Button>
        </Link>
        </div>
 
    </>
  )
}

export default Action