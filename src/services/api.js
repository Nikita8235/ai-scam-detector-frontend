import axios from "axios";

const API = axios.create({
  baseURL: "ai-scam-detector-backend-production.up.railway.app",
  timeout: 10000,
});

export default API;