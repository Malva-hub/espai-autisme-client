import AddComment from "./AddComment";
import { commentEventService } from "../services/comment.services";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewComment(props) {
  const { idevent } = props;

  const navigate = useNavigate();
  const [allComments, setAllComments] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getAllComments();
  }, []);

  const getAllComments = async () => {
    try {
      const response = await commentEventService(idevent);
      setAllComments(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching === true) {
    return <h3>...Loading</h3>;
  }

  return (
    <div >
      {allComments.map((eachComment) => {
        return (
          <div key={eachComment._id}>
            {eachComment.content}
          
          </div>
          
        );
      })}
      <AddComment idevent={idevent} getAllComments={getAllComments}/>
    </div>
  );
}

export default ViewComment;
