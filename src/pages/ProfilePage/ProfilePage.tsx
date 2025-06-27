// 📁 src/pages/ProfilePage.tsx
import { useEffect, useState } from 'react';
import {
    getPostsApi,
    deletePostApi,
    createPostApi,
    updatePostApi,
} from '../../apis/Post.apis';
import './ProfilePage.css';
import PostTable from '../../components/PostTable/PostTable';
import PaginationControls from '../../components/PaginationControls/PaginationControls';
import PostModal from '../../components/PostModal/PostModal';

const ProfilePage = () => {
    const [titleFilter, setTitleFilter] = useState('');
    const [tagFilter, setTagFilter] = useState('');
    const [page, setPage] = useState(1);

    const [posts, setPosts] = useState<PostType[]>([]);
    const [pagination, setPagination] = useState({
        current_page: 1,
        total_page: 1,
        total: 0,
    });

    const [showModal, setShowModal] = useState(false);
    const [editingPost, setEditingPost] = useState<PostType | null>(null);

    const fetchPosts = async () => {
        const data = await getPostsApi(page);
        setPosts(data.posts);
        setPagination({
            current_page: data.current_page,
            total_page: data.total_page,
            total: data.total,
        });
    };

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const handleAdd = () => {
        setEditingPost(null);
        setShowModal(true);
    };

    const handleEdit = (post: PostType) => {
        setEditingPost({
            ...post,
            tags: post.tags,
        });
        setShowModal(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Delete this post?')) {
            await deletePostApi(id);
            fetchPosts();
        }
    };

    const handleSubmit = async (data: { title: string; content: string; tags: string }) => {
        if (editingPost) {
            await updatePostApi(editingPost.id, data);
        } else {
            await createPostApi(data);
        }
        setShowModal(false);
        fetchPosts();
    };

    return (
        <div className="profile-page">
            <div className="profile-header">
                <button className="add-button" onClick={handleAdd}>Add new</button>
                <div className="filter-group">
                    <input value={titleFilter} onChange={e => setTitleFilter(e.target.value)} placeholder="Title" />
                    <input value={tagFilter} onChange={e => setTagFilter(e.target.value)} placeholder="Tags" />
                    <button className="sort-button">↓</button>
                </div>
            </div>

            <PostTable posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
            <PaginationControls page={page} totalPages={pagination.total_page} onPageChange={setPage} />

            <PostModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSubmit={handleSubmit}
                initialData={editingPost ? {
                    title: editingPost.title,
                    content: editingPost.description,
                    tags: editingPost.tags.join(', '),
                } : undefined}
            />
        </div>
    );
};

export default ProfilePage;
