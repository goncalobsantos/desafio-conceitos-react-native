import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:2408",
});

export default api;
