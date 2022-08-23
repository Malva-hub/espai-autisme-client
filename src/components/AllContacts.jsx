
import { allContactsService } from '../services/contact.services';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

function AllContacts() {

    const navigate = useNavigate()

    const [allContactsFalse, setAllContactsFalse] = useState([])
    const [allContactsTrue, setAllContactsTrue] = useState([])

  const [isFetching, setIsFetching] = useState(true)

  useEffect (() => {
    getAllContacts()
  },[])

 

  const getAllContacts = async () => {
    try{
      const response = await allContactsService()
      const dataContact = response.data
      let arrContactFalse = []
      let arrContactTrue = []
      for(let i =0; i< dataContact.length; i++)
        if(dataContact[i].isaproved === false){
             arrContactFalse.push(dataContact[i])
        
        }else {
            arrContactTrue.push(dataContact[i])
        }
        setAllContactsFalse(arrContactFalse)
        console.log(arrContactFalse)
        setAllContactsTrue(arrContactTrue)
        console.log(arrContactTrue)
        setIsFetching(false)

    }catch(error){
      navigate("/error")
    }
  }



if(isFetching === true){
  return <h3>...Loading</h3>
}

const handleAddContact = (contactid) => {
    const addContact = allContactsFalse.filter((eachContact) =>{
       
        return eachContact._id === contactid
        
    })
    addContact[0].isaproved = true
    console.log(addContact[0])
}
    
  return (
    <div>
    
    <h3>Personas pendiente de ser socios</h3>
    {allContactsFalse.map((eachContact) => {
       
        return(
        <div key={eachContact._id}>
                    {eachContact.username}
                <button onClick={() => handleAddContact(eachContact._id)}>Añadir como socio</button>
        </div>
        )  
     
    })}
    <h3>Personas que son socios</h3>
    {allContactsTrue.map((eachContact) => {
       
       return(
       <div key={eachContact._id}>
                   {eachContact.username}
               
       </div>
       )  
    
   })}
    </div>
  )
}

export default AllContacts