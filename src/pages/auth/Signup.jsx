import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../../services/auth.services";

import Form from "react-bootstrap/Form";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      email: email,
      password: password,
    };
    try {
      await signupService(user);
      navigate("/login");
    } catch (error) {
      console.log(error.response.status);
      console.log(error.response.data.errorMessage);
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <div className="login">
      <div className="login-page">
        <h4 className="text-center mt-4 mb-4 color">Registrarse</h4>

        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3" controlId="formGroupUsername">
            <Form.Label>Nombre</Form.Label>

            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>

            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Contraseña</Form.Label>

            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>

          {errorMessage ? <p>{errorMessage}</p> : null}
          <br />
          <div className=" d-flex-center">
            <button className="button" variant="warning" type="submit">
              Aceptar
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
