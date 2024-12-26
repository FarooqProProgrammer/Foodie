import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FiSearch } from "react-icons/fi";
import Avatar from '../Avatar';

const Header = () => {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home" className='MerriweatherFont'>Tasty Bite</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto gap-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Recepi</Nav.Link>
            <Nav.Link href="#link">Buy</Nav.Link>
          </Nav>
          <div className='d-flex justify-content-center align-items-center gap-3'>
            <FiSearch size={23} />
            <Avatar />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
