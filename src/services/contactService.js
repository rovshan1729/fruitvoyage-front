import api from "./api";

export const createContact = async (data) => {
  return await api.post("contact/", data);
};