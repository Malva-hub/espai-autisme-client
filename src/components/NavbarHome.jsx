import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavbarHome() {
  const navigate = useNavigate();

  const { isUserActive, authenticateUser, user } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/");
  };

  if (isUserActive === true && user.role === "admin") {
    return (
      <div className="navbar">
        <>
          <Navbar>
            <Container>
              <Navbar.Brand className="color-navbar" as={NavLink} to="/home">
                Inicio
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link className="color-navbar" as={NavLink} to="/aboutus">
                  Quienes Somos
                </Nav.Link>
                <Nav.Link className="color-navbar" as={NavLink} to="/events">
                  Programación
                </Nav.Link>
                <Nav.Link className="color-navbar" as={NavLink} to="/member">
                  Hazte Socio
                </Nav.Link>
                <Nav.Link
                  className="color-navbar"
                  as={NavLink}
                  to="/usservices"
                >
                  Nuestros Servicios
                </Nav.Link>
                <Nav.Link className="color-navbar" as={NavLink} to="/admin">
                  Perfil Admin
                </Nav.Link>
              </Nav>
            </Container>
            <Container className="position-end">
              <button className="button1" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </Container>
          </Navbar>
        </>
      </div>
    );
  } else if (isUserActive === true) {
    return (
      <div className="navbar">
        <>
          <Navbar>
            <Container>
              <Navbar.Brand as={NavLink} to="/home">
                Inicio
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link className="color-navbar" as={NavLink} to="/aboutus">
                  Quienes Somos
                </Nav.Link>
                <Nav.Link className="color-navbar" as={NavLink} to="/events">
                  Programación
                </Nav.Link>
                <Nav.Link className="color-navbar" as={NavLink} to="/member">
                  Hazte Socio
                </Nav.Link>
                <Nav.Link
                  className="color-navbar"
                  as={NavLink}
                  to="/usservices"
                >
                  Nuestros Servicios
                </Nav.Link>
                <Nav.Link className="color-navbar" as={NavLink} to="/myprofile">
                  Mi perfil
                </Nav.Link>
              </Nav>
            </Container>
            <Container className="position-end">
              <button onClick={handleLogout} className="button1">
                Cerrar Sesión
              </button>
            </Container>
          </Navbar>
        </>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <Navbar>
          <Container>
            <Navbar.Brand as={NavLink} to="/home">
              Inicio
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="color-navbar" as={NavLink} to="/aboutus">
                Quienes Somos
              </Nav.Link>
              <Nav.Link className="color-navbar" as={NavLink} to="/events">
                Programación
              </Nav.Link>
              <Nav.Link className="color-navbar" as={NavLink} to="/member">
                Hazte Socio
              </Nav.Link>
              <Nav.Link className="color-navbar" as={NavLink} to="/usservices">
                Nuestros Servicios
              </Nav.Link>
            </Nav>
          </Container>

          <Container>
            <Nav.Link as={NavLink} to="/login">
              Acceder
            </Nav.Link>
            <Nav.Link as={NavLink} to="/signup">
              Registrarse
            </Nav.Link>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarHome;
