import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Index from './components/Index/Index';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SharedLayout1 from './components/SharedLayout1/SharedLayout1';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout1/>}>
          <Route index element={<Index/>}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App