import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { setIsLogin, setUserInfo } from "../../state/UserInformation/ProfileSlice";
import { showAlert } from "../../components/AlertLoader";
export const Logout=()=>{
    const userInfo={
        username:'',
        email:'',
        first_name:'',
        last_name:'',
        token:'',
        isLogin:false
    }
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(setUserInfo(userInfo));
        dispatch(setIsLogin(false));
        showAlert('Logout successfully','red')
    },[])
    return(
        <Navigate to='/'></Navigate>
    )
}