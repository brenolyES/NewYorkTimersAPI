import axios from "axios";

const ApiKey = 'fYCyT0XBWrfdfbitTgb5k0UYPFGx65hU'

const AxioApi = axios.create({
  baseURL: `https://api.nytimes.com/svc/topstories/v2`
});

export {ApiKey, AxioApi}