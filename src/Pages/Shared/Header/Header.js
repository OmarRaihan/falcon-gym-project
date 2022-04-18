import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }

  return (
    <header>
      <Navbar className="shadow py-3" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand className="fs-4 fw-bold" as={Link} to="/home">FALCON GYM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              {
                user ?
                    <button onClick={handleSignOut} className="signOut-btn btn btn-danger rounded-pill">Sign Out</button>
                :
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
