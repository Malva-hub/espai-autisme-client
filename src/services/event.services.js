import service from "./config.services"

const eventService = () => {
    return service.get("/events")
  };

const addEventService = (newEvent) => {
  return service.post("/events", newEvent)
};

const addAttendeesService = (idEvent) => {
  return service.patch(`/events/${idEvent}/attendees`)
};

const listEventService = () => {
  return service.post("/events/attendees")
};

  export{
    eventService,
    addEventService,
    addAttendeesService,
    listEventService
 }