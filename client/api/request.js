import { axiosInstance } from "./config";

export const LoginRequest = ({ username, password }) => {
  console.log(username, "name!!!");
  return axiosInstance.post("/user/login", {
    username,
    password
  });
};

export const getAllFriends = () => {
  return axiosInstance.get("/user/friends", {
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
  });
};

export const applyRequest = () => {
  return axiosInstance.get("/apply", {
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
  });
};

export const userRequest = () => {
  return axiosInstance.get("/user", {
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
  });
};

export const readRequest = id => {
  return axiosInstance.put(`/message/${id}`, {},{
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
  });
};
