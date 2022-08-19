import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarHome() {
  return (
    <>
      <Navbar bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="home">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="aboutus">Quienes Somos</Nav.Link>
            <Nav.Link href="events">Programación</Nav.Link>
            <Nav.Link href="member">Hazte Socio</Nav.Link>
            <Nav.Link href="colaborators">Centros Colaboradores</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHome;