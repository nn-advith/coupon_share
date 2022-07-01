import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../../api/api.js'

const initialState = {
    loggedUser : {},
    userExists: false,
    loginError: 0
}

export const registerUser = createAsyncThunk(
    'register', 
    async(newuser) => {
        try{
            const { data } = await api.registerUser(newuser);
            return data
        }catch(err){
            console.log(err)
        }
    }
);

export const loginUser = createAsyncThunk(
    'login',
    async(user) => {
        try{
            const { data } = await api.loginUser(user);
            return data
        }catch(err){
            console.log(err)
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setLoggedUser: (state, id) => {
            state.loggedUser = id;
        },
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.fulfilled, (state, action) => {
            if(action.payload.error) {
                state.userExists = true
            }else{

                state.loggedUser = action.payload;
            }
           
        })
        .addCase(loginUser.fulfilled, (state, action )=> {
            if(action.payload.error === 'no_user') {
                state.loginError = 1
            }else if(action.payload.error === 'invalid_credentials'){
                state.loginError = 2
            }
            else{
                state.loggedUser = action.payload;
            }
        })
    }
})

export const { setLoggedUser } = userSlice.actions;

export const loggedUser =(state) => state.user.loggedUser;
export const userExists =(state) => state.user.userExists;
export const loginError =(state) => state.user.loginError;

export default userSlice.reducer;