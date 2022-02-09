import axios from "./axios/axios";

const endpoints = {
  register: (data) => axios.post("v1/users", data),
  login: (data) => axios.post("v1/auth/email/login", data),
  getProfile: () => axios.get("v1/auth/me"),
  updateProfile: (data) => axios.patch("v1/auth/me", data),
};
