import axios from 'axios';

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
})

// Add request interceptor for token
axiosClient.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
}, (error) => Promise.reject(error));

axiosClient.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refreshToken');

            if (!refreshToken) {
                return Promise.reject(error);
            }

            try {
                const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/refresh-token`, {}, {
                    headers: { refreshToken }
                })

                const newAccessToken = res.data.accessToken;
                if (newAccessToken) {
                    localStorage.setItem('accessToken', newAccessToken);
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                    return axiosClient(originalRequest);
                }
            } catch (refreshError) {
                console.error('Token refresh failed')
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');

                return Promise.reject(refreshError)
            }
        }

        return Promise.reject(error)
    }
);

export default axiosClient;