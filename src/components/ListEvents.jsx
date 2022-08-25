import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteEventService, eventService } from "../services/event.services";
import EditEvent from "../components/EditEvent";


function ListEvents() {

 const navigate = useNavigate()

 const [allEvents, setAllEvents] = useState([])

 const [isFetching, setIsFetching] = useState(true)

 const [thisEvent, setThisEvent] = useState([])


 useEffect (() => {
   getAllEvents()
 },[])



 const getAllEvents = async () => {
   try{
     const response = await eventService()
     setAllEvents(response.data)
     console.log(response.data)
     setIsFetching(false)
   }catch(error){
     navigate("/error")
   }
 }



if(isFetching === true){
 return <h3>...Loading</h3>
} 
 
const handleDeleteEvent = async (idEvent) => {
    try{
        await deleteEventService(idEvent)
        getAllEvents()
    }catch(error){
        navigate("/error")
    }
}



const handleEditEvent = (idEvent) => {
  if ( thisEvent !== idEvent) {
    setThisEvent(idEvent)
  }else if( thisEvent === idEvent) {
    setThisEvent("")
  }
  

}



  return (
    <div>
    <h1>Listado de Eventos</h1>
       {allEvents.map((eachEvent) => {
         
         return (
            <li key={eachEvent._id}> 
                {eachEvent.title} 
                <button onClick={() => handleEditEvent(eachEvent._id)}>{eachEvent._id === thisEvent  ? "Ocultar " : "Editar"}</button>
                {eachEvent._id === thisEvent ? <EditEvent idEvent={eachEvent._id} getAllEvents={getAllEvents} setThisEvent={setThisEvent}/> : null }
                
                <button onClick={()=> handleDeleteEvent(eachEvent._id)}>Borrar</button>

                
            </li>
           
         
         )
         
         

       })}  
    </div>
  )
}

export default ListEvents