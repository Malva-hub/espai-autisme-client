
import AddComment from './AddComment'
import {commentEventService} from "../services/comment.services";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

function ViewComment(props) {

    const navigate = useNavigate()
  const [allComments, setAllComments] = useState([""])
  const [isFetching, setIsFetching] = useState("")
 

  useEffect (() => {
    getAllComments()
  },[])


  const getAllComments = async (props) => {
    try{
      const response = await commentEventService(props)
      setAllComments(response.data)
      setIsFetching(false)
    }catch(error){
      navigate("/error")
    }
  }

  if(isFetching === true){
    return <h3>...Loading</h3>
  }


  return (
    <div>
    
    <AddComment idevent/>
    </div>
  )
}

export default ViewComment