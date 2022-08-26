import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  allCommentService,
  deleteCommentService,
} from "../services/comment.services";

import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function ListComments() {
  const navigate = useNavigate();

  const [allComments, setAllComments] = useState([]);

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getAllComments();
  }, []);

  const getAllComments = async () => {
    try {
      const response = await allCommentService();
      setAllComments(response.data);

      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching === true) {
    return <h3>...Loading</h3>;
  }

  const handleDeleteComment = async (idComment) => {
    try {
      await deleteCommentService(idComment);
      getAllComments();
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div className="d-center">
      <Card className="mt-3" style={{ width: "40rem" }}>
        <Card.Title className="color text-align">
          Lista de Comentarios
        </Card.Title>
        <ListGroup variant="flush">
          {allComments.map((eachComment) => {
            return (
              <ListGroup.Item key={eachComment._id}>
                {" "}
                {eachComment.content}{" "}
                <button
                  className="button"
                  onClick={() => handleDeleteComment(eachComment._id)}
                >
                  Borrar
                </button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card>
    </div>
  );
}

export default ListComments;
