import { newCommentService } from "../services/comment.services";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";

function AddComment(props) {
  const { idevent } = props;

  const navigate = useNavigate();

  const [content, setContent] = useState("");

  const handleContentChange = (event) => setContent(event.target.value);

  const handleSubmit = async () => {
    const newComment = {
      content: content,
    };

    try {
      await newCommentService(newComment, idevent);
      setContent("");
      props.getAllComments();
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <div className="add-event-page1">
        <Form style={{ width: "50rem" }}>
          <Form.Control
            type="text"
            name="content"
            onChange={handleContentChange}
            value={content}
          />
        </Form>
      </div>
      <br />
      <button className="button" onClick={handleSubmit}>
        Añadir comentario
      </button>
    </div>
  );
}

export default AddComment;
