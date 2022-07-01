import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Index from './components/Index/Index';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Register from './components/Register/Register';
import SharedLayout1 from './components/SharedLayout1/SharedLayout1';
import DashBoard from './components/Dashboard/Dashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout1/>}>
          <Route index element={<Index/>}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>

          <Route path="/dashboard" element={
            <ProtectedRoute >
              <DashBoard></DashBoard>
            </ProtectedRoute>
          }/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App