import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import Link from 'next/link';
import Styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" className={`app-text-color ${Styles.headerBg}`}>
        <NavbarBrand href="/" className={`d-flex ${Styles.logoText}`}>
          <div className={Styles.logoCircle}>S</div>
          <b>Surjeet</b>&nbsp;Bhadauriya
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link href="/resume">
                <a className="custom-link">Resume</a>
              </Link>
            </NavItem>
            <NavItem className="margin-left-10">
              <Link href="/portfolio">
                <a className="custom-link">Portfolio</a>
              </Link>
            </NavItem>
          </Nav>          
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
