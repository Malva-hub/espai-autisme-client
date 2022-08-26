import service from "./config.services";

const newCommentService = (newComment, idevent) => {
  return service.post(`/comment/${idevent}`, newComment);
};

const commentEventService = (idevent) => {
  return service.get(`/comment/${idevent}`);
};

const allCommentService = () => {
  return service.get("/comment");
};

const deleteCommentService = (idComment) => {
  return service.delete(`/comment/${idComment}`);
};

export {
  newCommentService,
  commentEventService,
  deleteCommentService,
  allCommentService,
};
