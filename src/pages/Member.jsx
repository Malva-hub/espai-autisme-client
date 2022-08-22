import {useNavigate} from "react-router-dom";
import {useState} from "react";
import { contactService } from "../services/contact.services.js";

function Member() {
  const navigate = useNavigate()

  const [ username, setUsername] = useState("")
  const [ firstname, setFirstname] = useState("")
  const [ secondname, setSecondname] = useState("")
  const [ email, setEmail] = useState("")
  const [ telephone, setTelephone] = useState()

  const handleUsernameChange = (event) => setUsername(event.target.value)

  const handleFirstChange = (event) => setFirstname(event.target.value)

  const handleSecondChange = (event) => setSecondname(event.target.value)

  const handleEmailChange = (event) => setEmail(event.target.value)

  const handleTelephoneChange = (event) => setTelephone(event.target.value)

  const handleSubmit = async (event) => {
    
      const newContact = {
        username: username,
        firstname: firstname,
        secondname: secondname,
        email: email,
        telephone: telephone
      }

      try {
        const response = await contactService(newContact);
        console.log(response.data);

        navigate("/");
      } catch (error) {
        
          navigate("/error");
        }
      }
    


  return (
    <div>
      <h3>Hazte Socio</h3>

      <p>
        Queridas familias y comunidad: Como sabéis una asociación no se mantiene
        por sí sola, os necesitamos,necesitamos socios para hacer fuerza y poder
        responder ante las instituciones sobre las necesidades que tiene esta
        gran comunidad. Por tan solo 10€ al mes podéis formar parte de Espai
        Autisme Borriana y ayudarnos a seguir creciendo. Los socios tendrán
        derecho a disfrutar de manera gratuita de los servicios que actualmente
        ofrece (gabinete psicológico, trabajadora social, asesorías de porteo
        ergonómico y respiros familiares). Ya sabéis que junt@s somos más
        fuertes!! Hazte socio para que podamos ayudar a las personas dentro del
        espectro autista, a sus familiares y cuidadores.
      </p>
      <form>
      <label htmlFor="username">Nombre:</label>
        <input
          type="text"
          name="username"
          onChange={handleUsernameChange}
          value={username}
        />
        <label htmlFor="firstname">Primer Apellido:</label>
        <input
          type="text"
          name="firstname"
          onChange={handleFirstChange}
          value={firstname}
        />
        <label htmlFor="secondname">Segundo Apellido:</label>
        <input
          type="text"
          name="secondname"
          onChange={handleSecondChange}
          value={secondname}
        />
         <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          onChange={handleEmailChange}
          value={email}
        />
            <label htmlFor="telephone">Teléfono:</label>
        <input
          type="number"
          name="telephone"
          onChange={handleTelephoneChange}
          value={telephone}
        />

      </form>
      <button onClick={handleSubmit}>Hacerme Socio</button>
      <p>Nos pondremos en contacto con usted para </p>
    </div>
  );
}

export default Member;
