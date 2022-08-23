
import {useEffect, useState, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import EditProfile from "../../components/EditProfile";

import {deleteProfileService, myProfileService} from "../../services/user.services";

import {AuthContext} from "../../context/auth.context"

function Myprofile() {

  const navigate = useNavigate()

  const { authenticateUser } = useContext(AuthContext);

  const [myProfile, setMyProfile] = useState([])

  const [isFetching, setIsFetching] = useState(true)

  const [isFormShowing, setIsFormShowing] = useState(false)

  useEffect (() => {
    getMyProfile()
  },[])

 

  const getMyProfile = async () => {
    try{
      const response = await myProfileService()
      setMyProfile(response.data)
      console.log(response.data)
      setIsFetching(false)
    }catch(error){
      navigate("/error")
    }
  }



if(isFetching === true){
  return <h3>...Loading</h3>
}

const toggleFormShowing = () =>{
  setIsFormShowing(!isFormShowing)
}

const handleDelete = async () => {
  try{
    await deleteProfileService()
    //todo se lo he puesto para que salga de estar 
    //authenticateUser() no sirve
    navigate("/home")
  }catch(error){
    navigate("/error")
  }
}

  return (
    <div>
    
    <h3>Myprofile</h3>
      <p>Nombre: {myProfile.username} </p>
      <p>Email: {myProfile.email}</p>
    <button onClick={toggleFormShowing}>{isFormShowing === false ? "Editar Perfil" : "Ocultar Formulario"} </button>
    {isFormShowing === true ? <EditProfile/> : null }

    <button onClick={handleDelete}>Borrar Perfil</button>

    {/* Listado de eventos voy a asistir */}

    

    </div>
    
  )
}

export default Myprofile