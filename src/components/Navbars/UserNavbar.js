import { useSelector } from 'react-redux';
import logo_image from '../../static/images/logo.jpg'
import './UserNavbar.css'
import { Link } from 'react-router-dom';
import { Nav,Navbar } from 'react-bootstrap';
export const UserNavbar=()=>{
    const userInfo=useSelector((state)=>state.user_profile)
    const closeUserNavbar=()=>{
        document.getElementById('user-dp1').style.display='flex';
        document.getElementById('user-navbar').style.width='0px';
    }
    return(
        <div className='user-navbar' id='user-navbar'>
        <div id='dp-container2'>
          <img src={logo_image} className='user-dp' id='user-dp2' onClick={closeUserNavbar}></img>
        </div>
        <Navbar   style={{ flexDirection:'column',width:'100%' }}  >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"  style={{ flexDirection:'column',width:'100%' }}>
              <Nav.Link as={Link} to="/profile">My Profile</Nav.Link>
              <Nav.Link as={Link} to="/history">History</Nav.Link>
              <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}