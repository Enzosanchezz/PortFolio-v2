import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logoTransparente.png'
const CV = 'CV/CV ENZO GABRIEL SANCHEZ..pdf'

export default function NavBar() {
  const [expand, updateExpanded] = useState(false);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="brand" />
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
          <Nav defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                 Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => updateExpanded(false)}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>       
                  <button >
                        <a href={CV} target="_blank" rel="noopener noreferrer" download="CV ENZO GABRIEL SANCHEZ.pdf" > 
                       CV
                        </a>
                  </button>  
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
