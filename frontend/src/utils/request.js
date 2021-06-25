import axios from "axios";

const request = axios.create({
  baseURL: "http://192.168.0.103:8000",
});

export default request;
