import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown"
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                  <Button variant="outline-secondary">Log In</Button>
                  <Nav.Link href="/log">Create Account</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </div>
  );
}

export default TopBar;