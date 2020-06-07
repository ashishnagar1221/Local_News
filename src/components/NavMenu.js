import React, { useState,useEffect} from 'react'
import {Navbar,Nav,Form,FormControl,Button,NavDropdown} from 'react-bootstrap'
import Head from './Head'

const NavMenu = (props) => {
  const [fieldVal,setFieldVal] = useState('')
  
  const  searchFunc = () => {
      alert(fieldVal)
  }

  const maxtemp = props.val?props.val['temp_max'] - 273.15:'100'
  const mintemp = props.val?props.val['temp_min'] - 273.15:'0'
  const place = props.place?props.place:'searching...'

  return(
      <>
    <Navbar  collapseOnSelect expand="lg" bg="light" variant="light">
    <Navbar.Brand href="#home">News Local</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" style={{padding:'0 40px'}}>
      <Nav.Link style={{padding:'0 40px'}} disabled>Location</Nav.Link>
      <Nav.Link style={{padding:'0 30px'}} disabled>{place}</Nav.Link>
      <Nav.Link style={{padding:'0 40px'}} disabled>Max Temp</Nav.Link>
  <Nav.Link style={{padding:'0 30px'}} disabled>{maxtemp}</Nav.Link>
      <Nav.Link style={{padding:'0 40px'}} disabled>Min Temp</Nav.Link>
      <Nav.Link style={{padding:'0 30px'}} disabled>{mintemp}</Nav.Link>
    </Nav>
    <Form inline onSubmit={() => searchFunc()}>
      <FormControl 
      type="text" 
      placeholder="Search any topic" 
      className="mr-sm-2" 
      onChange= {(e) => setFieldVal(e.target.value)}
      />
      <Button variant="outline-primary" className ="align-self-center mx-auto" type="submit">Search</Button>
    </Form>
    </Navbar.Collapse>
  </Navbar>
  <Head/>
  </>
  )
 }

export default NavMenu