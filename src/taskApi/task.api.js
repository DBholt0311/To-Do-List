import axios from 'axios';

export const fetchToDoList = () => {
    return axios.get('/api/todo')
};

export const postTask = (toDoData) => {
    return axios.post('/api/todo', toDoData);
};

export const updateTaskComplete = (toDoId) => {
    return axios.put(`/api/todo/${toDoId}`);
};

export const resetList = () => {
    return axios.delete('/api/todo')
};

export const deleteTask = (toDoId) => {
    return axios.delete(`/api/todo/${toDoId}`);
};