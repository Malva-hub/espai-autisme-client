import service from "./config.services";

const contactService = (newContact) => {
  return service.post("/contact", newContact);
};

const allContactsService = () => {
  return service.get("/contact");
};

const oneContactsService = (contactId) => {
  return service.patch(`/contact/${contactId}`);
};

export { contactService, allContactsService, oneContactsService };
