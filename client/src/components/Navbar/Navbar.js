import React from 'react';
import styled from 'styled-components';
import { colors } from '../../config/colors';



const NavbarWrapper = styled.nav`
    width: 100%;
    height: 75px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.secondary}
` 
const NavWrap = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

const Sub = styled.div`
    font-size: 0.5rem;
    color: #aaa;
    letter-spacing: -0.2px;
`

const NavTitle = styled.div`
    font-size: 2rem;
    font-weight: 900;
    color: ${colors.accent2}
`


const Navbar = () => {
  return (
    <>
        <NavbarWrapper>
        <NavWrap>
            <NavTitle>
                CouponShare
            </NavTitle>
            <Sub>MERN Project - N N Advith, P Saketh Reddy  |  2022</Sub>
        </NavWrap>
        </NavbarWrapper>
    </>
  )
}

export default Navbar;

