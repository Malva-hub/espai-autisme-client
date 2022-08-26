import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { editEventService } from "../services/event.services";
import { uploadService } from "../services/upload.services";

import Form from "react-bootstrap/Form";

function EditEvent(props) {
  const { idEvent } = props;

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");

  const [price, setPrice] = useState();
  const [imageUrl, setImageUrl] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);

  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleAddressChange = (event) => setAddress(event.target.value);

  const handlePriceChange = (event) => setPrice(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const eventEdit = {
      title,
      description,
      address,
      image: imageUrl,
      price,
    };
    try {
      const response = await editEventService(idEvent, eventEdit);
      console.log(response.data);
      setTitle("");
      setDescription("");
      setAddress("");

      setPrice("");
      props.getAllEvents();
      props.setThisEvent("");
    } catch (error) {
      navigate("/error");
    }
  };

  const handleImgUpload = async (event) => {
    console.log(event.target.files[0]);

    const form = new FormData();
    form.append("image", event.target.files[0]);
    try {
      const response = await uploadService(form);
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div className="d-center">
      <div className="add-event-page1">
        <h3 className="text-center mt-4 mb-4 color">Editar Evento</h3>
        <Form style={{ width: "30rem" }}>
          <Form.Group className="mb-3 " controlId="formGroupTitle">
            <Form.Label>Nombre</Form.Label>

            <Form.Control
              type="text"
              name="title"
              onChange={handleTitleChange}
              value={title}
            />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formGroupDescription">
            <Form.Label>Descripción</Form.Label>

            <Form.Control
              type="text"
              name="description"
              onChange={handleDescriptionChange}
              value={description}
            />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formGroupAddress">
            <Form.Label>Dirección</Form.Label>

            <Form.Control
              type="text"
              name="address"
              onChange={handleAddressChange}
              value={address}
            />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="formGroupPrice">
            <Form.Label>Precio:</Form.Label>

            <Form.Control
              type="number"
              name="price"
              onChange={handlePriceChange}
              value={price}
            />
          </Form.Group>
        </Form>
        <div>
          <Form.Group className="mb-3" controlId="formGroupPrice">
            <Form.Label>Añadir Imagen</Form.Label>

            <Form.Control type="file" onChange={handleImgUpload} />
            <img src={imageUrl} alt="imagen" />
          </Form.Group>
        </div>
        <button  className="button" onClick={handleSubmit}>Modificar Evento</button>
      </div>
    </div>
  );
}

export default EditEvent;
