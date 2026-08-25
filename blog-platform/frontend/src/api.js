import axios from "axios";

const api = axios.create({
  baseURL: "https://blog-platform-h3e1.onrender.com"
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
