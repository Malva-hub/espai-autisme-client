import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { editProfileService } from "../services/user.services";

function EditProfile() {

    const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  

  const handleUsernameChange = (event) => setUsername(event.target.value)

  const handleEmailChange = (event) => setEmail(event.target.value)


  const handleSubmit = async (event) => {
    event.preventDefault();
      const user = {
        username,
        email,
     
      }

      try {
        const response = await editProfileService(user);
        console.log(response.data);
        setEmail("")
        setUsername("")
        //todo AQUÍ LE TENGO QUE PONER QUE VAYA A /PROFILE O NO HACE FALTA PONER NADA
        navigate("/myprofile");
      } catch (error) {
        
          navigate("/error");
        }
      }
    



  return (
    <div>
        <form>
      <label htmlFor="username">Nombre:</label>
        <input
          type="text"
          name="username"
          onChange={handleUsernameChange}
          value={username}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          onChange={handleEmailChange}
          value={email}
        />
     

      </form>
      <button onClick={handleSubmit}>Modificar Perfil</button>
    </div>
  )
}

export default EditProfile