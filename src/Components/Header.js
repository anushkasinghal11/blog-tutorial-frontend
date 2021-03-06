import React, { Component } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

class Header extends Component {
  render() {
    return (
      <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
        <Navbar.Brand href='#home'>BE-A-BLOGGER</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link>
              <Link to='/allblogs'>All Blogs</Link>
            </Nav.Link>
            <Nav.Link href='#Create'>New Blog</Nav.Link>
          </Nav>
          <Form inline>
            <NavDropdown title='Search filters' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Title</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Author</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Content</NavDropdown.Item>
            </NavDropdown>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-info'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header
