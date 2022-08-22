import service from "./config.services"

const eventService = () => {
    return service.get("/events")
  };

  export{
    eventService
 }