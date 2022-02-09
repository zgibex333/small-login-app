const axios = require("axios");
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "https://nestjs-boilerplate-test.herokuapp.com/api/",
});

instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("auth-token");

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.log("Some bad shit happend, here is the error:", error);
  }
);

export default instance;
