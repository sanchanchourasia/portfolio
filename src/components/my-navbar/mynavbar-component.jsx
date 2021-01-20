import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../media/logo.png';
import './mynavbar-style.css'

const MyNavbar = () => {
    return (
        <>
          <Navbar collapseOnSelect expand="lg" fixed="top" variant="light" className="animate-navbar nav-theme justify-content-between">
            <Navbar.Brand href="#home"><img className="logo" src={Logo} alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#elearning">E-learing</Nav.Link>
            <Nav.Link href="#certificates">Certificates</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar> 
        </>
    )
}

export default MyNavbar
