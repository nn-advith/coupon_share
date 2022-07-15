import React from 'react';
import styled from 'styled-components';
import { colors } from '../../config/colors';
import {Button} from '../Reusable/Reusable';
import {getTickets, loggedUser} from '../../redux/slice/userSlice';
import {setClaimed} from '../../redux/slice/couponSlice'
import { useDispatch, useSelector } from 'react-redux';
import { claimCoupon } from '../../api/api';


const CardContainer = styled.div`
    width: 300px;
    border-radius: 10px;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 20px 0;

    .disable{
        background: #666;
        color: ${colors.white};
        cursor: default;
        &:hover{
            background-color: #666;
        color: ${colors.white};
   
        }
    }
`

const Issuer = styled.div`
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 5px;
`

const Error = styled.div`
    font-size: 0.6rem;
    font-style: italic;
    font-weight: 400;
`

const Description = styled.div`
    width: 80%;
    background: #9addfb;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 5px;
`

const ClaimButton = styled.div`
    width: 80px;
    font-size: 0.8rem;
    height: 30px;
    margin: 10px 0;
    border-radius: 10px;
    background-color: ${colors.secondary};
    color: ${colors.accent};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.1s ease;

    &:hover{
        background-color: ${colors.white};
        color: ${colors.secondary};
        transition: 0.1s ease;
    }
`

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
    <CardContainer>

        <Issuer>{coupon.couponName}</Issuer>
        <Description>{coupon.couponDesc}</Description>
        <br/>
        <Error>Expires on: </Error>
        <Issuer>{coupon.couponExpiry}</Issuer>
        {coupon.id === user.id ?<Error>Your public coupon</Error> : null}
        <ClaimButton onClick={ (coupon.id === user.id ) ? null : handleClaim} className={(coupon.id === user.id ) ? 'disable': null}>Claim</ClaimButton>
    </CardContainer>
    </>
  )
}

export default CouponCard