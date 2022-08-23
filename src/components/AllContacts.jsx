
import { allContactsService } from '../services/contact.services';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

function AllContacts() {

    const navigate = useNavigate()

    const [allContacts, setAllContacts] = useState([])

  const [isFetching, setIsFetching] = useState(true)

  useEffect (() => {
    getAllContacts()
  },[])

 

  const getAllContacts = async () => {
    try{
      const response = await allContactsService()
      setAllContacts(response.data)
      console.log(response.data)
      setIsFetching(false)
    }catch(error){
      navigate("/error")
    }
  }



if(isFetching === true){
  return <h3>...Loading</h3>
}

  return (
    <div>
    
    <h3>Personas pendiente de ser socios</h3>
    {allContacts.map((eachContact) => {
       
        return(
        <div>

                {eachContact.username}
        </div>
        )  
     
    })}
    {/* Sistema de selector para poner los que pagan y son socios
    esto va a tener un boton con función onclick se vaya a la ruta de usuarios y ponga que es socio en la base de datos, esta ruta en el back hay que poner que solo la vea el admin
    cuando se vuelve a hacer click es para que se quite de socio       */}
    <h3>Personas que son socios</h3>

    </div>
  )
}

export default AllContacts