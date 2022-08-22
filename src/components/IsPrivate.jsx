import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsPrivate(props) {
  const { isUserActive } = useContext(AuthContext);

  //todo Aquí puedo poner que si es admin para mostrar unas páginas o tengo que crear otro componente solo para admin CREAR OTRO
  // || (isUserActive === true && user === "admin")
  if (isUserActive === true ) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default IsPrivate;
