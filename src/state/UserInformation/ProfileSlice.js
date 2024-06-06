import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const ProfileSlice=createSlice({
    name:'user_profile',
    initialState:{
        'username':'',
        'email':'',
        'first_name':'',
        'last_name':'',
        'token':'',
        'isLogin':false
    },
    reducers:{
        setIsLogin:(state,action)=>{
            state.isLogin=action.payload
        },
        setUserInfo:(state,action)=>{
            state=action.payload;
            state.isLogin=true;
        }
    }
})
export default ProfileSlice.reducer;
export const {setIsLogin,setUserInfo}=ProfileSlice.actions
