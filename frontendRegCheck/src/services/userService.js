import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = false;

const api = axios.create({
  baseURL: "http://localhost:3000/"
});

export const register = (email, password) => {
  return api.post('api/users/register', { email, password })
}

export const login = (email, password) => {
  return api.post('api/users/login', { email, password })
}