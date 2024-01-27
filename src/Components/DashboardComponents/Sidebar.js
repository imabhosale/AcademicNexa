import React, { useState, useEffect } from 'react';
import {
  Container,
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  ListGroup,
  ListGroupItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      const label = document.querySelector('label[for=nav-toggle]');
      if (label) {
        label.removeEventListener('click', toggleSidebar);
      }
    };
  }, []); 
  useEffect(() => {
    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      const label = document.querySelector('label[for=nav-toggle]');
      if (label) {
        label.removeEventListener('click', toggleSidebar);
      }
    };
  }, []); 

  return (
    <div>
      <Collapse isOpen={showSidebar} className="d-lg-block bg-f2f2f2 sidebar" style={{ width: '250px' }}>
        <div className="position-sticky">
          <ListGroup flush className="mx-3 mt-4">
            <h5 className="mb-4 text-center"  active aria-current='true'>Student Sidebar</h5>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded rounded'>
              Main Dashboard
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded' >
              Website traffic
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
             <Link to="add">Add Quiz</Link> 
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
              Analytics
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
              SEO
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
              Orders
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
              International
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
              Partners
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
              Calendar
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
              User
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 rounded'>
              Sales
            </ListGroupItem>
          </ListGroup>

          <Nav className="mt-3">
            <NavItem className='me-3 me-lg-0'>
              {/* Dropdown for Profile */}
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle tag="a" className="nav-link hidden-arrow">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-circle"
                    height="22"
                    alt=""
                    loading="lazy"
                  />
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem>
                    <DropdownItem href="#">My Profile</DropdownItem>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownItem href="#">Settings</DropdownItem>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownItem href="#">Logout</DropdownItem>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>

            <NavItem className='me-3 me-lg-0'>
              {/* Notification Icon */}
              <span>
                <i className="bi bi-bell"></i>
              </span>
            </NavItem>
          </Nav>
        </div>
      </Collapse>

      <Navbar expand='lg' light>
        <Container fluid>
          <NavbarToggler
            type='button'
            aria-label='Toggle navigation'
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </NavbarToggler>
        </Container>
      </Navbar>
    </div>
  );
}

export default Sidebar;
