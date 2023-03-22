import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from "../../assets/logo.png";
import '../Navs/Navs.css';

const Navs = () => {

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} title="logo" alt="Health Links Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#pressganey"> PressGaney </Nav.Link>
            <Nav.Link href="#advantage"> Advantage </Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#solutions">Solutions</NavDropdown.Item> 
              <NavDropdown.Item href="#researches"> Researches </NavDropdown.Item>
              <NavDropdown.Item href="#researches"> Resources </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <button> Login </button> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
