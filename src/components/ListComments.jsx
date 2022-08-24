import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {allCommentService, deleteCommentService} from "../services/comment.services";


function ListComments() {

    const navigate = useNavigate()

 const [allComments, setAllComments] = useState([])

 const [isFetching, setIsFetching] = useState(true)

 useEffect (() => {
    getAllComments()
  },[])
 
 
 
  const getAllComments = async () => {
    try{
      const response = await allCommentService()
      setAllComments(response.data)
      console.log(response.data)
      setIsFetching(false)
    }catch(error){
      navigate("/error")
    }
  }
 
 
 
 if(isFetching === true){
  return <h3>...Loading</h3>
 } 
  
 const handleDeleteComment = async (idComment) => {
    try{
        await deleteCommentService(idComment)
        getAllComments()
    }catch(error){
        navigate("/error")
    }
}

  return (

    <div>
    <h3>Lista de Comentarios</h3>
    {allComments.map((eachComment) => {
         
         return (
            <li key={eachComment._id}> 
                {eachComment.content} 
               
                
                <button onClick={()=> handleDeleteComment(eachComment._id)}>Borrar</button>

                
            </li>
           
         
         )
         
         

       })}  
    
    </div>
  )
}

export default ListComments