import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../../api/api.js'

const initialState = {
    coupons: [],
    claimed: true,
}

export const getPublicCoupons = createAsyncThunk(
    'getPublicCoupon',
    async()=> {
        try{
            const { data } = await api.getPublicCoupons();
            return data.coupons
        }
        catch(err){
            console.log(err)
        }
    }
)

export const couponSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers:{
        setCoupons: (state, coupons) => {
            state.coupons = coupons
        },
        setClaimed: (state) => {
            state.claimed = !state.claimed
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPublicCoupons.fulfilled , (state, action) => {
            state.coupons = action.payload;
     
        })
    }
});

export const { setCoupons, setClaimed}  = couponSlice.actions

export const coupons = (state) => state.coupon.coupons;
export const claimed = (state) => state.coupon.claimed;

export default couponSlice.reducer;