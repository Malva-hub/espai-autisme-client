import service from "./config.services"

const contactService = (newContact) => {
    return service.post("/contact", newContact)
  };

  export{
    contactService
 }