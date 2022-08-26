import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { editProfileService } from "../services/user.services";

import Form from "react-bootstrap/Form";

function EditProfile(props) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (event) => setUsername(event.target.value);

  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      username,
      email,
    };

    try {
      const response = await editProfileService(user);
      console.log(response.data);
      setEmail("");
      setUsername("");
      props.getMyProfile();
      props.setIsFormShowing(false);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <div className="edit-profile">
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
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email:</Form.Label>

            <Form.Control
              type="text"
              name="email"
              onChange={handleEmailChange}
              value={email}
            />
          </Form.Group>
        </Form>
        <button className="button" onClick={handleSubmit}>
          Modificar Perfil
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
