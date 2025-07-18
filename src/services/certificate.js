import api from './api';

export const getCertificates = (data) => {
  return api.get('certificates/', data).then((res) => res.data);
};

export const getCertificatesById = (id) => {
  return api.get(`certificates/${id}`).then((res) => res.data);
}