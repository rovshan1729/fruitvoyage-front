import api from "./api"

export const getProducts = (data) => {
    return api.get("products/", data).then((res) => res.data);
};

export const getProductsById = (id) => {
    return api.get(`products/${id}`).then((res) => res.data);
};