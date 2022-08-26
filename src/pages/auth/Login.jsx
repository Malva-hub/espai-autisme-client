import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/auth.services";
import { AuthContext } from "../../context/auth.context";

import Form from "react-bootstrap/Form";

function Login() {
  const { authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };
    try {
      const response = await loginService(user);

      const authToken = response.data.authToken;
      localStorage.setItem("authToken", authToken);
      authenticateUser();
      navigate("/");
    } catch (error) {
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
        <h4 className="text-center mt-4 mb-4 color">Acceder</h4>

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="contraseña"
            />
          </Form.Group>
          {errorMessage ? <p>{errorMessage}</p> : null}
          <br />
          <div className=" d-flex-center">
            <button className="button" variant="warning" type="submit">
              Entrar
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
