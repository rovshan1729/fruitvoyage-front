import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.fruitvoyage.uz/api/'
});

export default api