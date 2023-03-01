import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';



function Menu () {
  return (
    <Navbar  expand="lg" className='nave'>
      <Container className='nav'>
        <Navbar.Brand href="#"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  nav">
            <Nav.Link href="#home">Home</Nav.Link>            
            <NavDropdown title="Calzado" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.5">Botines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6"> Ojotas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Zapatillas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Medias</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ropa" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.3">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Camisetas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Buzos y Camperas </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Shorts y pantalones </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Accesorios</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;