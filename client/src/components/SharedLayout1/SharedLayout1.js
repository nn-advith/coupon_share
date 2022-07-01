import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout1 = () => {
  return (
    <>
        <div>Coupon Share</div>
        <br/>
        <hr/>
        <br/>
        <Outlet/>
    </>
  )
}

export default SharedLayout1