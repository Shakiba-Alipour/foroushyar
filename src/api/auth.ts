import axios from "axios";
import store from "../store/store";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// To attach the access token to all requests
api.interceptors.request.use((config) => {
  // get the token from the redux store
  let token =
    store.getState().auth.token || localStorage.getItem("access_token");

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default api;
