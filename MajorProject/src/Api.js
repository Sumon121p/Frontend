import axios from 'axios';

export const getallList = async () => {
    return await axios.get("http://localhost:8080/api/List");
}

export const getbyidList = async (id) => {
    return await axios.get(`http://localhost:8080/api/List/${id}`);
}

export const addList = async (data) => {
    return await axios.post(`http://localhost:8080/api/List`, data);
}

export const updateList = async (id,data) => {
    return await axios.put(`http://localhost:8080/api/List/${id}`, data);
}

export const deleteList = async (id) => {
    return await axios.delete(`http://localhost:8080/api/List/${id}`);
}

export const giveReview = async (id, data) => {
    return await axios.post(`http://localhost:8080/api/List/listing/${id}/review`, data);
}

export const deleteReview = async (listId, Reviewid) => {
    return await axios.delete(`http://localhost:8080/api/List/${listId}/review/${Reviewid}`);
}