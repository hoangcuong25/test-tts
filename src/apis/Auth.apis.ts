import axiosClient from '../lib/axiosClient';

export const loginApi = async (username: string) => {
    const response = await axiosClient.post('/auth/login', { username });
    return response.data;
};

export const logoutApi = async () => {
    const response = await axiosClient.delete('/auth/logout');
    return response.data;
}
