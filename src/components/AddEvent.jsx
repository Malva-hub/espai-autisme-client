import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addEventService } from "../services/event.services";

function AddEvent() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();

  const handleTitleChange = (event) => setTitle(event.target.value)

  const handleDescriptionChange = (event) => setDescription(event.target.value)

  const handleAddressChange = (event) => setAddress(event.target.value)

  const handleImageChange = (event) => setImage(event.target.value)

  const handlePriceChange = (event) => setPrice(event.target.value)

  const handleSubmit = async (event) => {
    
      const newEvent = {
        title,
        description,
        address,
        image,
        price
      }

      try {
        const response = await addEventService(newEvent);
        console.log(response.data);

        navigate("/events");
      } catch (error) {
        
          navigate("/error");
        }
      }
    


  return (
    <div>
      <h3>Añadir un Evento</h3>
      <form>
      <label htmlFor="title">Nombre:</label>
        <input
          type="text"
          name="title"
          onChange={handleTitleChange}
          value={title}
        />
        <label htmlFor="description">Descripción:</label>
        <input
          type="text"
          name="description"
          onChange={handleDescriptionChange}
          value={description}
        />
        <label htmlFor="address">Dirección:</label>
        <input
          type="text"
          name="address"
          onChange={handleAddressChange}
          value={address}
        />
        {/* PENDIENTE PONER CLAUDINARY */}
         <label htmlFor="image">Imagen:</label>
        <input
          type="text"
          name="image"
          onChange={handleImageChange}
          value={image}
        />
            <label htmlFor="price">Precio:</label>
        <input
          type="number"
          name="price"
          onChange={handlePriceChange}
          value={price}
        />

      </form>
      <button onClick={handleSubmit}>Añadir Evento</button>
    </div>
  );
}

export default AddEvent;
