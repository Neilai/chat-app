import axios from "axios";

export const baseUrl = "http://localhost:4455";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   },
});

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, "网络错误");
  }
);
