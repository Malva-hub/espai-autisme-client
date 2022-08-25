import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {editEventService} from "../services/event.services";
import {uploadService} from "../services/upload.services";
function EditEvent(props) {

    const {idEvent} = props

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");

    const [price, setPrice] = useState();
    const [imageUrl, setImageUrl] = useState("");
  
    const handleTitleChange = (event) => setTitle(event.target.value)
  
    const handleDescriptionChange = (event) => setDescription(event.target.value)
  
    const handleAddressChange = (event) => setAddress(event.target.value)
  
   
  
    const handlePriceChange = (event) => setPrice(event.target.value)
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      
        const eventEdit = {
          title,
          description,
          address,
          image:imageUrl,
          price
        }
        try {
          const response = await editEventService(idEvent, eventEdit);
          console.log(response.data);
          setTitle("");
          setDescription("");
          setAddress("")  
        
          setPrice("")
          props.getAllEvents();
          props.setThisEvent("")
        } catch (error) {
          navigate("/error");
        }
      };

      const handleImgUpload = async (event) => {
        console.log(event.target.files[0])
    
        const form = new FormData()
        form.append("image",event.target.files[0] )
        try{
          const response = await uploadService(form)
          setImageUrl(response.data.imageUrl)
        }catch(error){
          navigate("/error")
        }
      }

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
      
            <label htmlFor="price">Precio:</label>
        <input
          type="number"
          name="price"
          onChange={handlePriceChange}
          value={price}
        />

      </form>
      <div>
        <h5>Añadir Imagen</h5>
        <input type="file" onChange={handleImgUpload}/>
        <img src={imageUrl} alt="imagen"/>
      </div>
      <button onClick={handleSubmit}>Modificar Evento</button>




    </div>
  )
}

export default EditEvent