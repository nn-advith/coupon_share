import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Reusable/Reusable';
import { Dashboard } from "../Dashboard/Dashboard";

const Index = () => {
  return (
    <>
        <Link to="/login">
            <Button> Login </Button>
        </Link>
        <Link to="/register">
            <Button> Register </Button>
        </Link>
    </>
  )
}

export default Index