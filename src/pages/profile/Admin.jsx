import React from "react";
import AddEvent from "../../components/AddEvent";
import AllContacts from "../../components/AllContacts";
import ListEvents from "../../components/ListEvents";
import ListComments from "../../components/ListComments";

function Admin() {
  return (
    <div>
      <AddEvent />
      <AllContacts />
      <ListEvents />
      <ListComments />
    </div>
  );
}

export default Admin;
