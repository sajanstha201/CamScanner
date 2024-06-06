import { configureStore } from "@reduxjs/toolkit";
import baseUrlReducer from './baseUrlSlice'
import userProfileReducer from './UserInformation/ProfileSlice'
export const store=configureStore({
    reducer:{
       base_url:baseUrlReducer,
       user_profile:userProfileReducer,
    }
})