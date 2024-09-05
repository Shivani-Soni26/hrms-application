import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import routes  from './Routes';
import React  from 'react';

function Sidebar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary side-nav pt-4 border-end sidebarnav-list">
      <Nav className="w-100 h-100 flex-column">
        <ul className='m-0 p-0 sidebar-list'>

          {routes.map((route, index) => {
            if (!route.isPrivate && route.isAdmin) {
              return (
                <li key={index}>
                  <Link to={`/layout/${route.path1}`}>{route.text}</Link>
                </li>
              );
            }
            if (!route.isPrivate && route.isManager) {
              return (
                <li key={index}>
                  <Link to={`/layout/${route.path1}`}>{route.text}</Link>
                </li>
              );
            }

            if (!route.isPrivate && route.isUser) {
              return (
                <li key={index}>
                  <Link to={`/layout/${route.path1}`}>{route.text}</Link>
                </li>
              );
            }
            if (!route.isPrivate && route.isHr) {
              return (
                <li key={index}>
                  <Link to={`/layout/${route.path1}`}>{route.text}</Link>
                </li>
              );
            }
            return null; // Handle other cases if needed
          })}
        </ul>
      </Nav>
    </Navbar>
  );
}

export default Sidebar;