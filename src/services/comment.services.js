import service from "./config.services";

const newCommentService = (newComment, idevent) => {
  return service.post(`/comment/${idevent}`, newComment)
};

const commentEventService = (idevent) => {
    return service.get(`/comment/${idevent}`)
  };

export {  newCommentService, commentEventService };