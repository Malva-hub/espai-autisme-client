import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteEventService, eventService } from "../services/event.services";
import EditEvent from "../components/EditEvent";

import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function ListEvents() {
  const navigate = useNavigate();

  const [allEvents, setAllEvents] = useState([]);

  const [isFetching, setIsFetching] = useState(true);

  const [thisEvent, setThisEvent] = useState([]);

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

  const handleDeleteEvent = async (idEvent) => {
    try {
      await deleteEventService(idEvent);
      getAllEvents();
    } catch (error) {
      navigate("/error");
    }
  };

  const handleEditEvent = (idEvent) => {
    if (thisEvent !== idEvent) {
      setThisEvent(idEvent);
    } else if (thisEvent === idEvent) {
      setThisEvent("");
    }
  };

  return (
    <div className="d-center">
      <Card className="mt-3" style={{ width: "40rem" }}>
        <Card.Title className="color text-align">
          Listado de Eventos{" "}
        </Card.Title>
        <ListGroup variant="flush">
          {allEvents.map((eachEvent) => {
            return (
              <ListGroup.Item key={eachEvent._id}>
                {eachEvent.title}{" "}
                <div className="gap-button-profile">
                  <div className="edit-list-event"> 
                    <div className="edit-list-event1" > 
                      <button 
                      className="button"
                      onClick={() => handleEditEvent(eachEvent._id)}
                    >
                      {eachEvent._id === thisEvent ? "Ocultar " : "Editar"}
                    </button>
                    </div>
                    <div className="edit-list-event"> 

                    {eachEvent._id === thisEvent ? (
                      <EditEvent
                        idEvent={eachEvent._id}
                        getAllEvents={getAllEvents}
                        setThisEvent={setThisEvent}
                      />
                    ) : null}
                    </div>
                  </div>
                <div className="edit-prof-form">
                    <button className="button" onClick={() => handleDeleteEvent(eachEvent._id)}>
                  Borrar
                </button>
                </div>
               </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card>
    </div>
  );
}

export default ListEvents;
