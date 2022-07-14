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
    justify-content: left

`

const NavTitle = styled.div`
    font-size: 2rem;
    font-weight: 900;
    color: ${colors.accent}
`


const Navbar = () => {
  return (
    <>
        <NavbarWrapper>
        <NavWrap>
            <NavTitle>
                Coupon Share
            </NavTitle>
        </NavWrap>
        </NavbarWrapper>
    </>
  )
}

export default Navbar;

