
import {useEffect, useState, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import EditProfile from "../../components/EditProfile";

import {deleteProfileService, myProfileService} from "../../services/user.services";

import {AuthContext} from "../../context/auth.context"
import { listEventService } from "../../services/event.services";

function Myprofile() {

  const navigate = useNavigate()

  const { isUserActive } = useContext(AuthContext);

  const [myProfile, setMyProfile] = useState([])

  const [myListEvents, setMyListEvents] = useState([])

  const [isFetching, setIsFetching] = useState(true)

  const [isFormShowing, setIsFormShowing] = useState(false)

  useEffect (() => {
    getMyProfile()
  },[])

 
  useEffect(() => {
    getMyEvents()
  }, [])

  const getMyProfile = async () => {
    try{
      const response = await myProfileService()
      setMyProfile(response.data)
      
      setIsFetching(false)
    }catch(error){
      navigate("/error")
    }
  }

  const getMyEvents = async () => {
    try{
      const response = await listEventService()
      setMyListEvents(response.data)
      console.log("HOLA", response.data)
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
    isUserActive(false)
    navigate("/home")
  }catch(error){
    navigate("/error")
  }

}



  return (
    <div>
    
    <h3>Mi Perfil</h3>
      <p>Nombre: {myProfile.username} </p>
      <p>Email: {myProfile.email}</p>
    <button onClick={toggleFormShowing}>{isFormShowing === false ? "Editar Perfil" : "Ocultar Formulario"} </button>
    {isFormShowing === true ? <EditProfile getMyProfile={getMyProfile}/> : null }

    <button onClick={handleDelete}>Borrar Perfil</button>

    
    <h4>Eventos a los que voy a asistir</h4>
    {myListEvents.map((eachList) => {
      return ( 
        <li> 
          {eachList.title}
        </li>
      )  
      
     
    })}


    </div>
    
  )
}

export default Myprofile