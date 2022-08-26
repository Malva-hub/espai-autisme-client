import Accordion from "react-bootstrap/Accordion";
import React from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addAttendeesService,
  eventService,
} from "../../services/event.services";
import ViewComment from "../../components/ViewComment";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";


function Events() {
  const navigate = useNavigate();

  const [allEvents, setAllEvents] = useState([]);

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    try {
      const response = await eventService();
      setAllEvents(response.data);
      console.log(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching === true) {
    return <h3>...Loading</h3>;
  }

  const handleAddAtendees = async (idEvent) => {
    try {
      await addAttendeesService(idEvent);
      getAllEvents();
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div className="d-center " >
    <div className="add-event-page1 ">
      <h1 className="text-center mt-4 mb-4 color">Listado de Eventos</h1>
      {allEvents.map((eachEvent) => {
        return (
          <React.Fragment key={eachEvent._id}>
            <div className="d-center ">
              <Accordion className="d-center"  style={{ width: "50rem" }}>
                <Accordion.Item clasName="d-center-events">
                  <Accordion.Header>{eachEvent.title}</Accordion.Header>
                  <Accordion.Body>
                    <Card>
                      <Card.Img variant="top" src={eachEvent.image} />

                      <Card.Body>
                        <Card.Title>{eachEvent.title}</Card.Title>
                        <Card.Text>{eachEvent.description}</Card.Text>
                        <Card.Text>Lugar: {eachEvent.address}</Card.Text>
                        <Card.Text>Precio: {eachEvent.price} €</Card.Text>
                        <Button className="button"
                          
                          onClick={() => handleAddAtendees(eachEvent._id)}
                        >
                          Apuntarme
                        </Button>
                      </Card.Body>
                    </Card>
                    <br/>
                    
                      <Card mb-3 style={{ width: "50rem" }}>
                        <ListGroup variant="flush">
                          <h4 className="text-center mt-4 mb-4 color">Personas que van a asistir</h4>

                          {eachEvent.attendees.map((eachAttenddees) => {
                            return (
                              <ListGroup.Item key={eachAttenddees._id}>
                                {eachAttenddees.username}
                              </ListGroup.Item>
                            );
                          })}
                        </ListGroup>
                      </Card>
                   
                     <br/>     
                    
                      <Card mb-3 style={{ width: "50rem" }}>
                       
                          <h4 className="text-center mt-4 mb-4 color" >Comentarios</h4>
                          <ViewComment idevent={eachEvent._id} />
                      
                      </Card>
                    
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </React.Fragment>
        );
      })}
    </div>
    </div>
  );
}

export default Events;
