import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { contactService } from "../services/contact.services.js";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function Member() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState();

  const handleUsernameChange = (event) => setUsername(event.target.value);

  const handleFirstChange = (event) => setFirstname(event.target.value);

  const handleSecondChange = (event) => setSecondname(event.target.value);

  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleTelephoneChange = (event) => setTelephone(event.target.value);

  const handleSubmit = async (event) => {
    const newContact = {
      username: username,
      firstname: firstname,
      secondname: secondname,
      email: email,
      telephone: telephone,
    };

    try {
      const response = await contactService(newContact);
      console.log(response.data);

      navigate("/");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div className="d-center">
      <Card className="mt-3" style={{ width: "70rem" }}>
        <Card.Body>
          <Card.Title className="color text-align ">Hazte Socio</Card.Title>
          <Card.Text className="text-align text-line">
            Queridas familias y comunidad: Como sabéis una asociación no se
            mantiene por sí sola, os necesitamos,necesitamos socios para hacer
            fuerza y poder responder ante las instituciones sobre las
            necesidades que tiene esta gran comunidad. Por tan solo 10€ al mes
            podéis formar parte de Espai Autisme Borriana y ayudarnos a seguir
            creciendo. Los socios tendrán derecho a disfrutar de manera gratuita
            de los servicios que actualmente ofrece (gabinete psicológico,
            trabajadora social, asesorías de porteo ergonómico y respiros
            familiares). Ya sabéis que junt@s somos más fuertes!! Hazte socio
            para que podamos ayudar a las personas dentro del espectro autista,
            a sus familiares y cuidadores.
          </Card.Text>
        </Card.Body>
      </Card>
              <br />
      <Form>
      <Form.Group className="mb-3" controlId="formGroupUsername">
        <Form.Label>Nombre:</Form.Label>
       
        <Form.Control
          type="text"
          name="username"
          onChange={handleUsernameChange}
          value={username}
        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupFirstname">
        <Form.Label>Primer Apellido:</Form.Label>   
        <Form.Control
          type="text"
          name="firstname"
          onChange={handleFirstChange}
          value={firstname}
        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupSecondname">
        <Form.Label>Segundo Apellido:</Form.Label>  
        
        <Form.Control
          type="text"
          name="secondname"
          onChange={handleSecondChange}
          value={secondname}
        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email:</Form.Label>        
       
        <Form.Control
          type="text"
          name="email"
          onChange={handleEmailChange}
          value={email}
        />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formGroupTelephone">
        <Form.Label>Teléfono:</Form.Label> 
        <label htmlFor="telephone">Teléfono:</label>
        <Form.Control
          type="number"
          name="telephone"
          onChange={handleTelephoneChange}
          value={telephone}
        />
        </Form.Group>
      </Form>
      <br />
      <button className="button" variant="warning" onClick={handleSubmit}>Hacerme Socio</button>
      <br/>
      <p>Nos pondremos en contacto con usted para </p>
    </div>
  );
}

export default Member;
