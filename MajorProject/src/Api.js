import axios from 'axios';

// Create an Axios instance with default configurations
const api = axios.create({
    baseURL: "https://backend-major-project-1.onrender.com/api/List",
    withCredentials: true // This ensures cookies are included in requests
});

const api2 = axios.create({
    baseURL: "https://backend-major-project-1.onrender.com",
    withCredentials: true // This ensures cookies are included in requests
});

export const isLogin = async () => {
    return await api2.get("/");
}

export const signup = async (data) => {
    return await api2.post('/signup', data);
}

export const login = async (data) => {
    return await api2.post('/login', data);
}

export const logout = async () => {
    return await api2.get('/logout');
}

export const getallList = async () => {
    return await api.get("/");
}

export const getbyidList = async (id) => {
    return await api.get(`/${id}`);
}

export const addList = async (data) => {
    return await api.post("/", data);
}

export const updateList = async (id, data) => {
    return await api.put(`/${id}`, data);
}

export const deleteList = async (id) => {
    return await api.delete(`/${id}`);
}

export const giveReview = async (id, data) => {
    return await api.post(`/listing/${id}/review`, data);
}

export const deleteReview = async (listId, reviewId) => {
    return await api.delete(`/${listId}/review/${reviewId}`);
}
