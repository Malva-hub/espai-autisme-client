import {newCommentService} from "../services/comment.services";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

function AddComment(props) {
    console.log(props)
    const {idevent} = props
    

    const navigate = useNavigate()

    const [content, setContent] = useState("")

    const handleContentChange = (event) => setContent(event.target.value)
     
    const handleSubmit = async () => {
        const newComment = {
            content: content
        }

      try{
        await newCommentService(newComment, idevent)
        setContent("")
        props.getAllComments()
       
      }catch(error){
        navigate("/error")
      }
    }
  
    

  return (
    <div>
        <form> 
          <input
          type="text"
          name="content"
          onChange={handleContentChange}
          value={content}
        />
        </form>
      
        <button onClick={handleSubmit}>Añadir comentario</button>
    </div>
  )
}

export default AddComment