import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./UnAuthNavbar.css"


const UnAuthNavBar = () => (
  <div>
    <Navbar expand="lg" id="Navbar">
     
      <Navbar.Brand id="NavBrand" href="/">scout</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="navbar-nav ml-auto px-3">

          <NavLink to="/authenticate" id="SignUp">
            Signup/Signin
          </NavLink>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  </div>
);



export default UnAuthNavBar;
