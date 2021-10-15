import { default as mainAxios } from "axios";

const axios = mainAxios.create({
  baseURL: "http://localhost:8000",
});

// For common config
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.withCredentials = true;

export default axios;
