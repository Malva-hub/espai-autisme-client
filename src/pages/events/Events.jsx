import Accordion from 'react-bootstrap/Accordion';
import React from "react"

import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {addAttendeesService, eventService} from "../../services/event.services";
import ViewComment from '../../components/ViewComment';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';



function Events() {

  const navigate = useNavigate()

  const [allEvents, setAllEvents] = useState([])

  const [isFetching, setIsFetching] = useState(true)

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

const handleAddAtendees = async (idEvent) => {
  
  try{
    await addAttendeesService(idEvent)
    getAllEvents()
  }catch(error){
    navigate("/error")
  }

}

  return (
    <div style={{width: 600} }> 
      <h1>Listado de Eventos</h1>
       {allEvents.map((eachEvent) => {
         
         return (
           <React.Fragment key={eachEvent._id}>         
            
           <Accordion style={{width: "50rem"}}>
            <Accordion.Item >
              <Accordion.Header>{eachEvent.title}</Accordion.Header>
              <Accordion.Body>
                <Col> 
                <Card >
                <Card.Img variant="top" src={eachEvent.image} />

                <Card.Body>
                <Card.Title>{eachEvent.title}</Card.Title>
                <Card.Text>{eachEvent.description}</Card.Text>
                <Card.Text>Lugar: {eachEvent.address}</Card.Text>
                <Card.Text>Precio: {eachEvent.price} €</Card.Text>
                  <Button variant="primary" onClick={() => handleAddAtendees(eachEvent._id)}>Apuntarme</Button>
                 </Card.Body>
                 </Card>
                 </Col>
                 <Col> 
                 <Card mb-3 style={{width: "30rem"}}>

                 <ListGroup variant="flush">
                  <h4>Personas que van a asistir</h4>
                
                {eachEvent.attendees.map((eachAttenddees) => {
                  return (
                    
                    <ListGroup.Item key={eachAttenddees._id}>{eachAttenddees.username}</ListGroup.Item> 
                    
                  )
                })}
                </ListGroup>
                
                <ListGroup variant="flush">
                <h4>Comentarios</h4>
                <ViewComment idevent={eachEvent._id}/>
                </ListGroup>
                </Card>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion> 
           </React.Fragment>
      

        
         )
       })}  
    
    </div>
    

  
    
  )
}

export default Events


