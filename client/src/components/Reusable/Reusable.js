import styled from 'styled-components';
import {colors} from '../../config/colors.js'

export const Button = styled.div`
    width: 200px; 
    height: 40px;
    background-color: ${colors.secondary};
    color: ${colors.accent};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    margin: 20px 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.1s ease;

    &:hover{
        background-color: ${colors.white};
        color: ${colors.secondary};
        transition: 0.1s ease;
    }
`

export const OutletMainWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
`

export const OutletWrap = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const BodyContainer = styled.div`
    width: 100%;
    padding: 30px;
`

export const Subhead = styled.div`
    font-size: 1.9rem;
    font-weight: 700;
    margin: 30px 0;
`

export const VerticalInputs = styled.div`
    display: flex;
    justify-content: center;
    align-items:left;
    flex-direction: column;
    width: 500px;
`

export const Input = styled.input`
    padding: 10px 5px;
    border: none;
    outline: none;
    box-shadow: none;
    margin: 10px 0;
    border-bottom: 2px solid ${colors.accent2};

    &:focus{
        border: none;
        outline: none;
        box-shadow: none;
        border-bottom: 2px solid ${colors.accent};

    }

    &::placeholder{
        font-size: 0.8rem;
        font-family: 'Montserrat', sans-serif;
    }
`

export const SucessBanner = styled.div`
    color: ${colors.sucess};
    font-size: 1rem;
    font-weight: 500;
`

export const ErrorBanner = styled.div`
    color: ${colors.danger};
    font-size: 1rem;
    font-weight: 500;
`

export const NavButton = styled.div`
    width: 40px;
    border-radius: 50%;
    height: 40px;
    background-color: ${colors.accent2};
    color: ${colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 20px 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.1s ease;

    &:hover{
        background-color: ${colors.white};
        color: ${colors.secondary};
        transition: 0.1s ease;
    }
`

export const ActionButton = styled.div`
    width: 150px;
    font-size: 0.8rem;
    height: 40px;
    margin: 10px 10px;
    border-radius: 10px;
    background-color: ${colors.accent2};
    color: ${colors.secondary};
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

export const Label = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
    margin-top: 20px;
    margin-left: 5px;
`