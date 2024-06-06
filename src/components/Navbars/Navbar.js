import { useState } from 'react';
import logo_image from '../../static/images/logo.jpg'
import './Navbar.css'
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserNavbar from './UserNavbar';
function Navbar(){
    const userInfo=useSelector((state)=>state.user_profile)
    const loc=useLocation()
    const [userNavbarIsOpen,setUserNavbarIsOpen]=useState(true)
    const path=['/login','/register']
    const isactive=path.includes(loc.pathname)
    if(isactive){
        return null;
    }
    const showUserNavbar=()=>{
        document.getElementById('user-navbar').style.width='300px';
        setUserNavbarIsOpen(!userNavbarIsOpen);
        document.getElementById('user-dp1').style.display='none';
    }
    return(
        <div id='navbar'>
            <Link id='logo' to='/'>
            <img src={logo_image}></img>
            </Link>
            <Link to='/pdf-conversion'>Pdf Conversion</Link>
            <Link to='/table-extraction'>Table Extraction</Link>
            <Link to='/document-analysis'>Document Analysis</Link>
            {!userInfo.isLogin&&(
            <div id='login-signup'>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Sign Up</Link>
            </div>)}
            {userInfo.isLogin&&(
                <div>
                    <img src={logo_image} className='user-dp'id='user-dp1' onClick={showUserNavbar}></img>
                </div>
            )}
        </div>
    )
}
export default Navbar;