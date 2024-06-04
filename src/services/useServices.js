import axiosInstance from "./axiosConfig";

const registerUserService = (data) => {
  return axiosInstance.post("api/v1/register", data);
};

const loginUserService = (data) => {
  return axiosInstance.post("api/v1/login", data);
};

export { registerUserService, loginUserService };
