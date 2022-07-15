import React from 'react';
import styled from 'styled-components';
import { colors } from '../../config/colors';

import { Button } from '../Reusable/Reusable';


const PageBar = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`

const PageButton = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: transparent;
  margin: 10px;
  

  .active{
    background: ${colors.accent2};
    color: ${colors.secondary}
  }

  .inactive{
    background: ${colors.secondary};
    color: ${colors.accent2}
  }
`

const PB = styled.button`
  border: none;
  box-shadow: none;
  outline: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${colors.white};

  &:hover, &:focus{
    border: none;
  box-shadow: none;
  outline: none;
  }
`

const PaginationBar = ({perPage,currentPage, total, paginate}) => {

    const pages = []
    for(let i=1; i<=Math.ceil(total/perPage) ; i++ ){
        pages.push(i)
    }
  
  return (
    <>
    <PageBar>

    {pages.map((i) => (
        <PageButton key={i}>
        <PB onClick={() => paginate(i)} className={i === currentPage ? 'active' : 'inactive'}>
        {i}
        </PB>
            
        </PageButton>
    ))}
    </PageBar>
    
    </>
  )
}

export default PaginationBar