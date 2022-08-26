import AddComment from "./AddComment";
import { commentEventService } from "../services/comment.services";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

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
    <div className="d-center">
      <Card className="mt-3" style={{ width: "50rem" }}>
        <ListGroup variant="flush">
          {allComments.map((eachComment) => {
            return (
              <ListGroup.Item key={eachComment._id}>
                {eachComment.content}
              </ListGroup.Item>
            );
          })}
          <AddComment idevent={idevent} getAllComments={getAllComments} />
        </ListGroup>
      </Card>
    </div>
  );
}

export default ViewComment;
