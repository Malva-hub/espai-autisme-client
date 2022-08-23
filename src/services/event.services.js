import service from "./config.services"

const eventService = () => {
    return service.get("/events")
  };

const addEventService = (newEvent) => {
  return service.post("/events", newEvent)
};

  export{
    eventService,
    addEventService
 }