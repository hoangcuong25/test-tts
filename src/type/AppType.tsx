export { };

declare global {
    type TestimonialType = {
        id: string;
        desctiption: string;
        imageUrl: string;
    }

    type PostType = {
        id: string;
        title: string;
        description: string;
        tags: string[];
    };

    type GetPostResType = {
        posts: PostType[]
        current_page: number;
        total_page: number;
        page_size: number;
        total: number;
    };
}