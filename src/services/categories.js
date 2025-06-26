import api from "./api"

export const getCategories = async () => {
   const categories = await api.get("categories/");
   return categories.data;
}

export const getCategoriesById = async (id) => {
    const categories= await api.get(`categories/${id}/`);
    return categories.data;
}
