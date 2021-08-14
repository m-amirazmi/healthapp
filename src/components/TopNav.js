import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container } from 'reactstrap';
import { routes } from '../utils/routes';

export const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const renderLinks = () => {
    return routes.map((route) => {
      if (route.showOnNav) return (
        <NavItem key={route.path}>
          <Link to={route.path} className="text-uppercase text-decoration-none nav-link">{route.name}</Link>
        </NavItem>
      )
    })
  }

  return (
    <Navbar color="white" light expand="md" className="sticky-top border shadow-sm border-top-0 border-start-0 border-end-0">
      <Container>
        <NavbarBrand href="/">HealthApp</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            {renderLinks()}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
