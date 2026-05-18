import axios from "axios";

const API = axios.create({
  baseURL: "https://YOUR-BACKEND-URL.up.railway.app/api",
});

export default API;