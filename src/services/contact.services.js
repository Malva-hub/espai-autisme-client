import service from "./config.services"

const contactService = (newContact) => {
    return service.post("/contact", newContact)
  };

const allContactsService = () => {
    return service.get("/contact")
  };

  export{
    contactService,
    allContactsService
 }