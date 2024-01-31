"use client"; 

import Image from 'next/image';
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import logo from '../../assets/image/logo.svg'
function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar expand={"md"}  color="dark" light="true" dark="true" className='navbar'>
          <NavbarBrand href="/">
            <Image src={logo} alt="logo" className="img-fluid logo"/>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink href="/" className='navbar-text'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/my-portfolio" className='navbar-text'>
                  Project
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  )
}

export default NavBar