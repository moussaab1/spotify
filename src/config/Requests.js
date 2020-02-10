import axios from "axios";
import LocalStorage from "./LocalStorage";
// axios.defaults.headers.common = {
//   "X-Requested-With": "XMLHttpRequest",
//   "X-CSRF-TOKEN": document
//     .querySelector('meta[name="csrf-token"]')
//     .getAttribute("content")
// };
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
const http = axios.create({
  baseURL: "https://api.spotify.com/v1",
  timeout: 1000,
  headers: { "Content-Type": "application/json" }
});

http.interceptors.request.use(
  function(config) {
    const token = LocalStorage.getStorage("spotifyAuthToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default http;
