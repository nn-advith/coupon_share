import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BodyContainer, Button, Subhead, NavButton } from '../Reusable/Reusable';
import {BiArrowBack} from 'react-icons/bi'
import { useSelector } from 'react-redux';
import { loggedUser } from '../../redux/slice/userSlice';
import { myPC } from '../../api/api';
import styled from 'styled-components';
import { colors } from '../../config/colors';


const CardContainer = styled.div`
  width: 300px;
    border-radius: 10px;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 20px 0;
`

const Code = styled.div`
  background: #9addfb;
  color: ${colors.secondary};
  padding: 5px 10px ;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  margin-top: 10px;

`

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
    <BodyContainer>
    <Link to="/dashboard" >
        <NavButton><BiArrowBack/></NavButton>
      </Link>
    <Subhead>My Public Coupons</Subhead>

      {mycoupons.map((i, key) => (
        <CardContainer key={key}>
          <h4>{i.couponName}</h4>
          <Code>{i.couponVal}</Code>
          <br/>
        </CardContainer>
      ))}
    </BodyContainer>
    </>
  )
}

export default MyPC