import axios from "axios";

export const apiURL = axios.create({
    baseURL: "http://dummy.restapiexample.com/api/v1/"
  });