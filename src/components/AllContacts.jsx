import { allContactsService } from "../services/contact.services";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { oneContactsService } from "../services/contact.services";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function AllContacts() {
  const navigate = useNavigate();

  const [allContactsFalse, setAllContactsFalse] = useState([]);
  const [allContactsTrue, setAllContactsTrue] = useState([]);

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getAllContacts();
  }, []);

  const getAllContacts = async () => {
    try {
      const response = await allContactsService();
      const dataContact = response.data;

      let arrContactFalse = [];
      let arrContactTrue = [];
      for (let i = 0; i < dataContact.length; i++)
        if (dataContact[i].isaproved === false) {
          arrContactFalse.push(dataContact[i]);
        } else {
          arrContactTrue.push(dataContact[i]);
        }

      setAllContactsFalse(arrContactFalse);

      setAllContactsTrue(arrContactTrue);

      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching === true) {
    return <h3>...Loading</h3>;
  }

  const handleAddContact = async (contactId) => {
    try {
      await oneContactsService(contactId);
      getAllContacts();
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div className="d-center">
      <Card className="mt-3" style={{ width: "40rem" }}>
        <Card.Title className="color text-align">
          Personas pendiente de ser socios
        </Card.Title>
        <ListGroup variant="flush">
          {allContactsFalse.map((eachContact) => {
            return (
              <ListGroup.Item key={eachContact._id}>
                {" "}
                {eachContact.username}{" "}
                <button
                  className="button"
                  onClick={() => handleAddContact(eachContact._id)}
                >
                  Añadir como socio
                </button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card>
      <br />
      <Card className="mt-3" style={{ width: "40rem" }}>
        <Card.Title className="color text-align">
          Personas que son socios
        </Card.Title>
        <ListGroup variant="flush">
          {allContactsTrue.map((eachContact) => {
            return (
              <ListGroup.Item key={eachContact._id}>
                {eachContact.username}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card>
    </div>
  );
}

export default AllContacts;
