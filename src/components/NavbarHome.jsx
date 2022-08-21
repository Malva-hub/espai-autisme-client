import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {useContext} from "react";
import {AuthContext} from "../context/auth.context";
import {useNavigate} from "react-router-dom";

function NavbarHome() {

  const navigate = useNavigate()

  const {isUserActive, authenticateUser } = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    authenticateUser()
    navigate("/")
  }

  if(isUserActive === true){
    return (
      <div>
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
              <Container> 
                <button onClick={handleLogout}>Logout</button>
              </Container>
             
              </Navbar>
          </>

          
      </div>



    )
  }else{
    
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
              <Container>
                  <Nav.Link href="login">Acceder</Nav.Link>
                  <Nav.Link href="signup">Registrarse</Nav.Link>
              </Container>
            </Navbar>
          </>
        );



  }




  
}

export default NavbarHome;