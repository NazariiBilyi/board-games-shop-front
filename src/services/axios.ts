import axios, {  AxiosInstance } from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

const http: AxiosInstance = axios.create({
    baseURL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
    },
    paramsSerializer: {
        indexes: null // by default: false
    },
    responseType: 'json',
})

http.interceptors?.request.use((request) => {
    if (!request.data) {
        request.data = null;
    }
    if (request.data instanceof FormData) {
        request.headers['Content-Type'] = 'multipart/form-data';
    }

    return request;
});

export default http;