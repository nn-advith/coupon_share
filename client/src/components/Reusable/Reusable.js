import styled from 'styled-components';
import {colors} from '../../config/colors.js'

export const Button = styled.div`
    width: 120px; 
    height: 40px;
    background-color: ${colors.secondary};
    color: ${colors.accent};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`