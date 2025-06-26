import axiosClient from '../lib/axiosClient';

export const getTestimonials = async () => {
    const response = await axiosClient.get('/galleries');
    return response.data;
};
