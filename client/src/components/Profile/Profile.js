import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import ui from '../../assets/images/ui.png'
import ticket from '../../assets/images/ticket.png'
import { useSelector, useDispatch } from 'react-redux';
import { loggedUser, setLoggedUser } from "../../redux/slice/userSlice";
import { Button, ActionButton } from '../Reusable/Reusable';
import { BodyContainer } from "../Reusable/Reusable";
import { colors } from "../../config/colors";

const ProfileContainer =  styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
`

const UserContainer = styled.div`
    display: flex;

    padding: 10px;
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 30px
`

const Icon = styled.img`
    width: 50px;
    border-radius: 50%;
    margin: 10px 0;
`

const Info = styled.div`
     display: flex;
    flex-direction: column;
`

const Name = styled.div`
    font-size: 1rem;
    font-weight: 500;
`

const Username = styled.div`
    font-size: 0.9rem;
    font-weight: 300;
    font-style: italic
`

const TicketNum = styled.div`
    color: ${colors.danger};
    font-size: 1.6rem;
    font-weight: 700;
    margin-left: 5px
`

const Tickets = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
`

const ActionContainer = styled.div`
    display: flex;
    padding: 10px;
`

const Profile = ()=>{

    const user = useSelector(loggedUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      dispatch(setLoggedUser(null));
      navigate("/");
    }
  

   return (
    <>

    <ProfileContainer>
        <UserContainer>
            <UserInfo>
                <Icon src={ui}/>
                <Info>
                    <Name>{user.name}</Name>
                    <Username>{user.user}</Username>
                </Info>
            </UserInfo>
            <Tickets>
                <img src={ticket} style={{width: '55px'}}/>
                <TicketNum>{user.tickets}</TicketNum>
            </Tickets> 
        </UserContainer>
        <ActionContainer>

            <Link to="mycoupons" >
                <ActionButton>My Coupons</ActionButton>
            </Link>

            <Link to="mypc" >
                <ActionButton>My Public Coupons</ActionButton>
            </Link>
        
                <ActionButton onClick={handleLogout}>Logout</ActionButton>
     
        </ActionContainer>
    </ProfileContainer>
   

   </>
   );
}

export default Profile