import service from "./config.services";

const myProfileService = () => {
  return service.get("/user/myprofile");
};

const editProfileService = (user) => {
  return service.patch("/user/myprofile", user);
};

const deleteProfileService = () => {
  return service.delete("/user/myprofile");
};

export { myProfileService, editProfileService, deleteProfileService };
