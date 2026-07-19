import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-scam-detector-backend-production.up.railway.app/api",
  timeout: 10000,
});

export default API;