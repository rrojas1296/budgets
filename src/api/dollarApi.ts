import axios from "axios";
import { FASTFOREX_API_KEY } from "../config/environments";

export const apiExchangeInstance = axios.create({
  baseURL: "https://api.fastforex.io/fetch-one",
  headers: {
    "X-API-Key": FASTFOREX_API_KEY,
  },
});
