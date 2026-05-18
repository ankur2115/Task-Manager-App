import axios from 'axios';

// Ek professional central instance banana
const API = axios.create({ 
    baseURL: 'http://localhost:5000/api' // Tera backend URL
});

// Request Interceptor: Taaki har baar manually token na bhejna pade
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;