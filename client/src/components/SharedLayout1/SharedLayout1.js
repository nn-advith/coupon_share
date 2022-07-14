import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { OutletMainWrapper, OutletWrap } from '../Reusable/Reusable';

const SharedLayout1 = () => {
  return (
    <>
        <Navbar/>
        <OutletMainWrapper>
          <OutletWrap>
            <Outlet/>
          </OutletWrap>
        </OutletMainWrapper>
    </>
  )
}

export default SharedLayout1