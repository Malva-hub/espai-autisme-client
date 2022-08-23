import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsAdmin(props) {

  const { user } = useContext(AuthContext);
  
      
  if (user.role === "admin" ) {
    return props.children;
  } else {
    return <Navigate to="/home"/>;
  }

 


}


export default IsAdmin