import React from 'react';

import { Button } from '../Reusable/Reusable';

const PaginationBar = ({perPage, total, paginate}) => {

    const pages = []
    for(let i=1; i<=Math.ceil(total/perPage) ; i++ ){
        pages.push(i)
    }
  
  return (
    <>
    <hr/>
    {pages.map((i) => (
        <Button key={i}>
        <button onClick={() => paginate(i)}>
        {i}
        </button>
            
        </Button>
    ))}
    
    </>
  )
}

export default PaginationBar