import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';


function Menu () {
  return (
    <Navbar  expand="lg">
      <Container className='nav'>
        <Navbar.Brand href="#"><img  className='imagen' src={process.env.PUBLIC_URL + '/img/logo.png'}/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Tiendas</Nav.Link>
            <Nav.Link href="#link">Nosotras</Nav.Link>
            <NavDropdown title="Catalogo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Botines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Vestimenta
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Medias
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;