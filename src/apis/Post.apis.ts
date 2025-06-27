import axiosClient from '../lib/axiosClient';

export const getPostsApi = async (page: number = 1): Promise<GetPostResType> => {
    try {
        const response = await axiosClient.get('/posts', {
            params: { page },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const createPostApi = async (post: { title: string; content: string, tags: string }) => {
    const response = await axiosClient.post('/posts', post);
    return response.data;
}

export const updatePostApi = async (postId: string, post: { title: string; content: string, tags: string }) => {
    const response = await axiosClient.patch(`/posts/${postId}`, post);
    return response.data;
}

export const deletePostApi = async (postId: string) => {
    const response = await axiosClient.delete(`/posts/${postId}`);
    return response.data;
}

export const getTagsApi = async () => {
    const response = await axiosClient.get('/posts/tags');
    return response.data;
}