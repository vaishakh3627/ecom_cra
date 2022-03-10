import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import { useAuth } from "../../../AuthContext";

const AdminNavbar = () => {

  const auth = useAuth();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">Ecom-admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
              <NavDropdown.Item onClick={() => auth.toggleUserType("user")}>Switch to app</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AdminNavbar;
