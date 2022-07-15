import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../Reusable/Reusable';
import { Dashboard } from "../Dashboard/Dashboard";
import { colors } from '../../config/colors';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #05e8ba;
  background-image: linear-gradient(-180deg, #05e8ba 0%, #087ee1 74%);
`

const Container = styled.div`
  width: 60%;
  position: relative;
  height: 50%;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* background: red; */}
`

 const C1 = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: right;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 50px;
 `

 
const C2 = styled.div`
display: flex;
width: 30%;
justify-content: center;
align-items: center;
flex-direction: column;
border-left: 3px solid ${colors.secondary};
padding: 20px;
`

const Title = styled.div`
  font-size: 5rem;
  font-weight: 900;
  text-align: right;
  color: ${colors.black}

`

const Subtitle = styled.div`
   font-size: 1.2rem;
  font-weight: 400;
  text-align: right;
  color: ${colors.black}
`

const Index = () => {
  return (
    <>
      <Wrapper>
      <Container>
    <C1>

        <Title>CouponShare</Title>
        <Subtitle>
          Share your coupon codes which you don't need anymore. Get the ones you need.
        </Subtitle>
    </C1>
    <C2>
    <Link to="/login">
            <Button> Login </Button>
        </Link>
        <Link to="/register">
            <Button> Register </Button>
        </Link>
    </C2>
      </Container>
      </Wrapper>
    </>
  )
}

export default Index