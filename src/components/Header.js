
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../assets/images/logo.png"
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  useEffect(() => {

    const storedUserName = localStorage.getItem('username');
    setUserName(storedUserName || 'DefaultName');
  }, []);
  const handleLogout = () => {

    localStorage.removeItem('username');

    navigate('/login');
    window.location.reload();
  };
  const handleProfileClick = () => {

    navigate('/layout/profile');
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary py-0 px-2 border-bottom">
      <Navbar.Brand>
        <img src={Logo} alt='Logo' className='logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {userName ? (
            <NavDropdown title={userName} id="user-login-menu" align="end">
              <NavDropdown.Item onClick={handleProfileClick}>Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" disabled>
                Settings
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2" disabled>
                Profile
              </NavDropdown.Item> */}
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item> */}
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <NavDropdown title="Menu" id="default-menu" align="end">
              {/* ... (your default menu items) */}
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;               