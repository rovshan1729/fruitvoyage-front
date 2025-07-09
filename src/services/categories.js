import api from "./api"

export const getCategories = async (lang) => {
    const categories = await api.get("categories/", {
        headers: {
            "content-language": lang,
            "accept-language": lang
        }
    });
    return categories.data;
};

export const getCategoriesById = async (id, lang) => {
    const categories = await api.get(`categories/${id}/`, {
        headers: {
            "content-language": lang,
            "accept-language": lang
        }
    });
    return categories.data;
}
