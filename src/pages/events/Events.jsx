import Accordion from 'react-bootstrap/Accordion';


import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {eventService} from "../../services/event.services";
import ViewComment from '../../components/ViewComment';



function Events() {

  const navigate = useNavigate()

  const [allEvents, setAllEvents] = useState([""])

  const [isFetching, setIsFetching] = useState("")

  useEffect (() => {
    getAllEvents()
  },[])

 

  const getAllEvents = async () => {
    try{
      const response = await eventService()
      setAllEvents(response.data)
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
      <h1>Listado de Eventos</h1>
       {allEvents.map((eachEvent) => {
         return (
           <>         
            <ViewComment idevent={eachEvent.id}/>
           <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{eachEvent.title}</Accordion.Header>
              <Accordion.Body>
                <img src={eachEvent.image} alt="image1" />
                <p>{eachEvent.description}</p>
                <p>Lugar: {eachEvent.address}</p>
                <p>{eachEvent.price} €</p>
                <button>Apuntarme</button>
                
                <p>Comentarios</p>

              </Accordion.Body>
            </Accordion.Item>
            </Accordion> 
           </>
      

        
         )
       })}  
    
    </div>
    

  
    
  )
}

export default Events


