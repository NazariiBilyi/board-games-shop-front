import axios, {  AxiosInstance } from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

const axiosInstance: AxiosInstance = axios.create({
    baseURL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
    },
    paramsSerializer: {
        indexes: null
    },
    responseType: 'json',
})

axiosInstance.interceptors.request.use(request => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        request.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    if (
        request.method === 'delete' &&
        (request.data === undefined || request.data === null)
    ) {
        delete request.headers['Content-Type'];
    }

    if (request.data instanceof FormData) {
        request.headers['Content-Type'] = 'multipart/form-data';
    }

    return request;
}, error => {
    return Promise.reject(error);
});

axiosInstance.interceptors?.request.use((request) => {
    if (!request.data) {
        request.data = null;
    }
    if (request.data instanceof FormData) {
        request.headers['Content-Type'] = 'multipart/form-data';
    }

    return request;
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // Clear any auth tokens if stored
            localStorage.removeItem('accessToken');

            // Optional: redirect to login
            window.location.href = '/login'; // Can’t use useNavigate here
        }

        // Re-throw error for local handlers to catch
        return Promise.reject(error);
    }
);

export default axiosInstance;