import { useState } from 'react';
import logo_image from '../../static/images/logo.jpg'
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {UserNavbar} from './UserNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import { Navbar as NavbarB,Nav,NavDropdown, Container, Offcanvas } from 'react-bootstrap';
export const Navbar=()=>{
    const userInfo=useSelector((state)=>state.userProfile)
    const loc=useLocation()
    const path=['/login','/register']
    const isactive=path.includes(loc.pathname)
    if(isactive){
        return null;
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
            <NavbarB.Toggle aria-controls="basic-navbar-nav" />
            <NavbarB.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/pdf-conversion">Pdf Conversion</Nav.Link>
                    {userInfo.isLogin&&(<>
                        <Nav.Link as={Link} to="/table-extraction">Table Extraction</Nav.Link>
                        <Nav.Link as={Link} to="/document-analysis">Document Analysis</Nav.Link>
                    </>
                    )}
                    <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
                    <Nav.Link as={Link} to="/download">Download</Nav.Link>
                </Nav>
                {!userInfo.isLogin && (
                    <Nav>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
                    </Nav>
                )}
                {userInfo.isLogin && (
                    <>
                    <Nav.Link as={Link} to="/settings" className='m-2'>
                        <FontAwesomeIcon icon={faBell} size='1x'/> 
                    </Nav.Link>
                    <UserNavbar></UserNavbar>
                    </>
                    )}
            </NavbarB.Collapse>
        </Container>
    </NavbarB>
    )
}