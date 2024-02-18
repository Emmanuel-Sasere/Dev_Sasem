import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument, CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  // const handleNavLinkClick = (sectionId) => {
  //   updateLoad(true);
  //   document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
  // };

  window.addEventListener("scroll", scrollHandler);

  const handleNavLinkClick = (sectionId) => {
    updateExpanded(false);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => handleNavLinkClick("#home")}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => handleNavLinkClick("#about")}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => handleNavLinkClick("#projects")}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="https://wa.link/0p95e3" target="_blank">
                <CgMail style={{ marginBottom: "2px" }} /> Engage Me
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="resume-btn">
              <Button className="resume-btn-inner">
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => handleNavLinkClick("#resume")}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
