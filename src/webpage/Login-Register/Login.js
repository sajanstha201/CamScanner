import { useState } from 'react';
import './Login.css'
import { Link ,Navigate} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {activate_loader,showAlert} from '../../components/AlertLoader/index'
import { setIsLogin ,setToken,setUserInfo} from '../../state/UserInformation/ProfileSlice';
export function Login(){
    const user_profile=useSelector((state)=>state.userProfile)
    const dispatch=useDispatch()
    const base_url=useSelector((state)=>state.baseUrl.backend)
    const [userLoginInfo,setuserLoginInfo]=useState({'username':'','password':''})
    if(user_profile.isLogin){
        activate_loader(false);
        showAlert('Successfully login','green')
        return <Navigate to='/'></Navigate>
    }
    const handleChange=(event)=>{
        setuserLoginInfo({...userLoginInfo,[event.target.name]:event.target.value})
    }
    const submitForm=async()=>{
        activate_loader(true)
        try{
        const response=await axios.get(base_url+'api/get-csrf-token/')
        const csrf_token=response.data.csrf_token
        await axios.post(base_url+'api/login/',userLoginInfo)
        .then((response)=>{
            dispatch(setUserInfo(response.data))
            console.log(response.data)
            dispatch(setToken(response.data.token))
            dispatch(setIsLogin(true))
            localStorage.setItem('token',response.data.token)
        })
        }
        catch(error){
            showAlert(error,'red')
        }
        finally{
            activate_loader(false)
        }
    }
    return(
        <div className="login-container">
            <div className="login-form"  >
                <h2>Login</h2>
                <label htmlFor="email">Username</label>
                <input id='username' name='username' type='text' onChange={handleChange} required></input>
                <label htmlFor="password">Password</label>
                <input id='password' name='password' type='password' onChange={handleChange}required></input>
                <button type='submit' onClick={submitForm}>Login</button>
                <Link to='/register' style={{marginTop:'20px'}}>Don't have an account?</Link>
                <Link to='/anti-nav/otp'>Forgot Password?</Link>
            </div>
        </div>

    );
}