import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice'
import couponReducer from '../slice/couponSlice.js'

export const store = configureStore({
  reducer: {
    user: userReducer,
    coupon: couponReducer,
  },
})