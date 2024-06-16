import { useSelector } from 'react-redux';
import logo_image from '../../static/images/logo.jpg'
import './UserNavbar.css'
import { Link } from 'react-router-dom';
import { Nav,Navbar,Offcanvas} from 'react-bootstrap';
import { useState } from 'react';
export const UserNavbar=()=>{
    const userInfo=useSelector((state)=>state.user_profile)
    const [showUserOffCanvas,setShowUserOffCanvas]=useState(false)
    return(
      <>
      <Nav>
          <Nav.Link>
              <img
                  src={logo_image}
                  alt="User DP"
                  className="user-dp"
                  id="user-dp1"
                  onClick={()=>setShowUserOffCanvas(true)}
              />
          </Nav.Link>
      </Nav>
      <Offcanvas show={showUserOffCanvas} onHide={()=>setShowUserOffCanvas(false)} placement='end'>
          <Offcanvas.Header closeButton className='mb-4'>
            <Offcanvas.Title >
                <Nav.Link>
                    <img
                        src={logo_image}
                        alt="User DP"
                        className="user-dp"
                        id="user-dp1"
                        style={{position:'absolute',left:'45%',top:'0%'}}
                    />
                </Nav.Link>
          </Offcanvas.Title >
          </Offcanvas.Header>
            <Offcanvas.Body>
            <Navbar>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse>
                <Nav className="mr-auto d-flex flex-column w-100 align-items-center">
                        <Nav.Link as={Link} to="/profile">My Profile</Nav.Link>
                        <Nav.Link as={Link} to="/user-history">My History</Nav.Link>
                        <Nav.Link as={Link} to="/settings">Premium Features</Nav.Link>
                        <Nav.Link as={Link} to="/settings">Notification</Nav.Link>
                        <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
                        <Nav.Link as={Link} to="/user-history">Support</Nav.Link>
                        <Nav.Link as={Link} to="/logout">Log Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
          </Offcanvas.Body>
      </Offcanvas>
      </>
    );
}