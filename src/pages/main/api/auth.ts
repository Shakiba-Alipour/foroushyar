import axios from "axios";
import { useAppSelector } from "../../../store/store";

const API_BASE_URL = "";
export const APP_BASE_URL = "https://foroush-yar.ir/";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application.json",
  },
});

// To attach the access token to all requests
api.interceptors.request.use((config) => {
  // get the token from the redux store
  let token = useAppSelector((state) => state.auth.token);

  // if the page is refreshed and the states cleared
  if (!token) {
    token = localStorage.getItem("accessToken");
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
