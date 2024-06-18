import { faL } from "@fortawesome/free-solid-svg-icons";
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
            state.isLogin=action.payload;
        },
        setUserInfo:(state,action)=>{
            const userInfo=action.payload
            state.username=userInfo.username;
            state.email=userInfo.email;
            state.first_name=userInfo.first_name;
            state.last_name=userInfo.last_name;
            state.token=userInfo.token;
            state.token='Token '+state.token;
        },
        setToken:(state,action)=>{
            state.token='Token '+action.payload
        },
    }
})
export default ProfileSlice.reducer;
export const {setIsLogin,setUserInfo,setToken}=ProfileSlice.actions
