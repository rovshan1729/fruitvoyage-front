import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.fruitvoyage.uz/api/',
  headers: {
    "content-language": "en",
    "accept-language": "en",
  }
});

export default api