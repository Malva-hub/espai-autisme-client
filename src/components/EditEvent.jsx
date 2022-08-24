import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {editEventService} from "../services/event.services";

function EditEvent(props) {

    const {idEvent} = props

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
      event.preventDefault();
      
        const eventEdit = {
          title,
          description,
          address,
          image,
          price
        }
        try {
          const response = await editEventService(idEvent, eventEdit);
          console.log(response.data);
          setTitle("");
          setDescription("");
          setAddress("")  
          setImage("")
          setPrice("")
          props.getAllEvents();
        } catch (error) {
          navigate("/error");
        }
      };



  return (
    <div>
      <h3>Editar Evento</h3>
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
        {/* PENDIENTE PONER CLOUDINARY */}
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
      <button onClick={handleSubmit}>Modificar Evento</button>
    </div>
  )
}

export default EditEvent