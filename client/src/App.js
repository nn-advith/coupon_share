import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Index from './components/Index/Index';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Register from './components/Register/Register';
import SharedLayout1 from './components/SharedLayout1/SharedLayout1';
import DashBoard from './components/Dashboard/Dashboard'
import Share from './components/Share/Share';
import Error from './components/Error/Error'
import Action from './components/Action/Action';
import ViewCoupon from './components/ViewCoupon/ViewCoupon';
import MyCoupons from './components/MyCoupons/MyCoupons';
import MyPC from './components/MyPC/MyPC';
import Redirect from './components/Redirect/Redirect';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Index />} />
        <Route path="/" element={<SharedLayout1/>}>
          <Route index element={<Redirect />} />
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>

          <Route path="dashboard" element={
            <ProtectedRoute >
              <DashBoard />
            </ProtectedRoute>
          }>
            <Route index element={<Action />}/>
            <Route path="share" element={<Share/>}/>
            <Route path="view" element={<ViewCoupon/>}/>
            <Route path="mycoupons" element={<MyCoupons/>}/>
            <Route path="mypc" element={<MyPC/>} />
          </Route>

          <Route path="*" element={<Error />} />
        </Route>
       
      </Routes>
    </Router>
  )
}

export default App