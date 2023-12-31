import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
import logo from "../../Images/logo.png";

const Header = () => {
  // const { user, logOut } = useAuth();

  const activeStyle = {
    fontWeight: "bold",
    color: "#0409a9",
  };

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Container varient="light">
          <Navbar.Brand>
            <img src={logo} alt="Healthcare" width="180" height="50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fs-5 fw-bold">
              <Nav.Link activeStyle={activeStyle} as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link activeStyle={activeStyle} as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link activeStyle={activeStyle} as={NavLink} to="/services">
                Services
              </Nav.Link>
              <Nav.Link
                activeStyle={activeStyle}
                as={NavLink}
                to="/appointment"
              >
                Appointment
              </Nav.Link>
            </Nav>
            <Navbar.Text className="fs-5 fw-bold">
              {false ? (
                <div>
                  <i className="fas fa-user"></i> Sachin
                  <button
                    // onClick={logOut}
                    className="btn btn-secondary text-center ms-2"
                  >
                    <i className="fas fa-sign-out-alt mx-auto"></i>
                  </button>
                </div>
              ) : (
                <Nav.Link>
                  <i className="fas fa-sign-in-alt me-2"></i>
                  Login
                </Nav.Link>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
