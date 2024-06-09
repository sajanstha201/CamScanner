import { useState } from 'react';
import logo_image from '../../static/images/logo.jpg'
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserNavbar from './UserNavbar';
import { Navbar as NavbarB,Nav,NavDropdown, Container } from 'react-bootstrap';
export const Navbar=()=>{
    const userInfo=useSelector((state)=>state.userProfile)
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
        <NavbarB bg="dark" expand="lg" className="bg-body-tertiary shadow-sm" style={{marginBottom:'15px'}}>
        <Container  fluid>
            <NavbarB.Brand as={Link} to="/" style={{marginRight:'50px'}}>
                <img
                    src={logo_image}
                    alt="Logo"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                />{' '}
            </NavbarB.Brand>
            {/*
            <NavbarB.Toggle aria-controls="user-profile-navbar" />
            
                <NavbarB.Collapse id="user-profile-navbar">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/pdf-conversion">My Profile</Nav.Link>
                    <Nav.Link as={Link} to="/table-extraction">Contact Us</Nav.Link>
                    <Nav.Link as={Link} to="/document-analysis">Setting</Nav.Link>
                </Nav>
                </NavbarB.Collapse>
            */}


            
            <NavbarB.Toggle aria-controls="basic-navbar-nav" />
            <NavbarB.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/pdf-conversion">Pdf Conversion</Nav.Link>
                    <Nav.Link as={Link} to="/table-extraction">Table Extraction</Nav.Link>
                    <Nav.Link as={Link} to="/document-analysis">Document Analysis</Nav.Link>
                </Nav>
                {!userInfo.isLogin && (
                    <Nav>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
                    </Nav>
                )}
                {userInfo.isLogin && (
                    <Nav>
                        <Nav.Link>
                            <img
                                src={logo_image}
                                alt="User DP"
                                className="user-dp"
                                id="user-dp1"
                                onClick={showUserNavbar}
                            />
                        </Nav.Link>
                    </Nav>
                )}
            </NavbarB.Collapse>
        </Container>
    </NavbarB>
        /*

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
        */
    )
}