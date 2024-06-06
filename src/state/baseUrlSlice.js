import { createSlice } from "@reduxjs/toolkit";

export const baseUrlSlice=createSlice({
    name:'base_url',
    initialState:{
        'value':'http://192.168.1.65:8000/'
    },
    reducers:{
    }
})
export default baseUrlSlice.reducer