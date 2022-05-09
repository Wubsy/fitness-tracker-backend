
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function TopBar () {
  return (
      <div>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/create">Activity</Nav.Link>                
                  <Nav.Link href="/signIn">Sign In</Nav.Link>
                  <NavDropdown title="User Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/signUp">New User Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/profile">View Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/update">Update Profile</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </div>
  );
}

export default TopBar;