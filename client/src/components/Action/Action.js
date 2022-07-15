import React from 'react';
import { BodyContainer, Button } from '../Reusable/Reusable';
import { Link } from 'react-router-dom';

const Action = () => {
  return (
    <>
    <BodyContainer>


        <Link to="share" >
          <Button>Share a Coupon</Button>
        </Link>
   
        <Link to="view">
          <Button>View public coupons</Button>
        </Link>

    </BodyContainer>  
 
    </>
  )
}

export default Action