import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import EditProfile from "../../components/EditProfile";
import ListGroup from "react-bootstrap/ListGroup";

import {
  deleteProfileService,
  myProfileService,
} from "../../services/user.services";

import { AuthContext } from "../../context/auth.context";
import { listEventService } from "../../services/event.services";

import Card from "react-bootstrap/Card";

function Myprofile() {
  const navigate = useNavigate();

  const { isUserActive } = useContext(AuthContext);

  const [myProfile, setMyProfile] = useState([]);

  const [myListEvents, setMyListEvents] = useState([]);

  const [isFetching, setIsFetching] = useState(true);

  const [isFormShowing, setIsFormShowing] = useState(false);

  useEffect(() => {
    getMyProfile();
  }, []);

  useEffect(() => {
    getMyEvents();
  }, []);

  const getMyProfile = async () => {
    try {
      const response = await myProfileService();
      setMyProfile(response.data);

      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  const getMyEvents = async () => {
    try {
      const response = await listEventService();
      setMyListEvents(response.data);

      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching === true) {
    return <h3>...Loading</h3>;
  }

  const toggleFormShowing = () => {
    setIsFormShowing(!isFormShowing);
  };

  const handleDelete = async () => {
    try {
      await deleteProfileService();
      isUserActive(false);
      navigate("/home");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div className="d-center">
      <Card className="mt-3" style={{ width: "40rem" }}>
        <Card.Body>
          <Card.Title className="color text-align">Mi perfil</Card.Title>
          <Card.Text>Nombre: {myProfile.username}</Card.Text>
          <Card.Text>Email: {myProfile.email}</Card.Text>

          <div className="gap-button-profile">
          <div className="edit-prof-btn"> 
            <button className="button" onClick={toggleFormShowing}>
              {isFormShowing === false ? "Editar Perfil" : "Ocultar Formulario"}{" "}
            </button>
          
          </div>
          <div className="edit-prof-form">
            {isFormShowing === true ? (
              <EditProfile
                setIsFormShowing={setIsFormShowing}
                getMyProfile={getMyProfile}
              />
            ) : null}
          </div>
            

           
          </div>
        </Card.Body>
      </Card>
      <br/>
      <button className="button" onClick={handleDelete}>
              Borrar Perfil
            </button>
      <br />
      <Card className="mt-3" style={{ width: "40rem" }}>
        <Card.Title className="color text-align">
          Eventos a los que voy a asistir
        </Card.Title>
        <ListGroup variant="flush">
          {myListEvents.map((eachList) => {
            return (
              <ListGroup.Item key={eachList._id}>
                {" "}
                 {eachList.title}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card>
    </div>
  );
}

export default Myprofile;
