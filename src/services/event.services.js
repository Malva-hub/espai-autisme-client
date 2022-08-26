import service from "./config.services";

const eventService = () => {
  return service.get("/events");
};

const addEventService = (newEvent) => {
  return service.post("/events", newEvent);
};

const addAttendeesService = (idEvent) => {
  return service.patch(`/events/${idEvent}/attendees`);
};

const listEventService = () => {
  return service.get("/events/attendees/my-profile");
};

const editEventService = (idEvent, event) => {
  return service.patch(`/events/${idEvent}`, event);
};

const deleteEventService = (idEvent) => {
  return service.delete(`/events/${idEvent}`);
};

export {
  eventService,
  addEventService,
  addAttendeesService,
  listEventService,
  editEventService,
  deleteEventService,
};
