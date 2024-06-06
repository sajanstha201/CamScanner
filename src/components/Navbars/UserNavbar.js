import { useSelector } from 'react-redux';
import logo_image from '../../static/images/logo.jpg'
import './UserNavbar.css'
import { Link } from 'react-router-dom';
function UserNavbar(){
    const userInfo=useSelector((state)=>state.user_profile)
    const closeUserNavbar=()=>{
        document.getElementById('user-dp1').style.display='flex';
        document.getElementById('user-navbar').style.width='0px';
    }
    return(
        <div className='user-navbar' id='user-navbar'>
            <div id='dp-container2'>
                <img src={logo_image} className='user-dp'id='user-dp2' onClick={closeUserNavbar}></img>
            </div>
            <div>
                <Link>My Profile</Link>
            </div>
            <div>
                <Link>History</Link>
            </div>
            <div>
                <Link>Setting</Link>
            </div>
            <div>
                <Link>About Us</Link>
            </div>
            <div>
                <Link>Contact Us</Link>
            </div>
            <div>
                <Link>FAQ</Link>
            </div>
        </div>
    );
}
export default UserNavbar;