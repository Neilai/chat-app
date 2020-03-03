import { axiosInstance } from "./config";

export const LoginRequest = ({ username, password }) => {
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
  return axiosInstance.put(
    `/message/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    }
  );
};

export const searchRequest = username => {
  return axiosInstance.post(
    "/user/search",
    {
      username
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    }
  );
};

export const updateRequest = v => {
  return axiosInstance.put("/user/", v, {
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
  });
};
