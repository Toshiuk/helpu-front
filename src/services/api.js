import axios from "axios";

const api = axios.create({
  baseURL: "",
  headers: {
    Token: sessionStorage.token,
    "Access-Control-Allow-Origin": "*"
  }
});

export default api;
