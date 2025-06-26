import axiosClient from '../lib/axiosClient';

export const getTestimonialsApi = async () => {
    const response = await axiosClient.get('/galleries');
    return response.data;
};
