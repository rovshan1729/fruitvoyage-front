import api from './api';

export const getPartners = (data) => {
  return api.get('partners/', data).then((res) => res.data);
};

export const getPartnersById = (id) => {
  return api.get(`partners/${id}`).then((res) => res.data);
}