import { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { getPostsApi } from '../../apis/Post.apis';
import './ProfilePage.css';

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

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPostsApi(page);
                setPosts(data.posts);
                setPagination({
                    current_page: data.current_page,
                    total_page: data.total_page,
                    total: data.total,
                });
            } catch (err) {
                console.error('Failed to fetch posts', err);
            }
        };

        fetchPosts();
    }, [page]);

    return (
        <div className="profile-page">
            <div className="profile-header">
                <button className="add-button">Add new</button>

                <div className="filter-group">
                    <input
                        type="text"
                        placeholder="Title"
                        value={titleFilter}
                        onChange={(e) => setTitleFilter(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Tags"
                        value={tagFilter}
                        onChange={(e) => setTagFilter(e.target.value)}
                    />
                    <button className="sort-button">↓</button>
                </div>
            </div>

            <table className="profile-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Tags</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.tags.join(', ')}</td>
                            <td>
                                <div className="action-buttons">
                                    <button className="icon-button">
                                        <Pencil size={16} />
                                    </button>
                                    <button className="icon-button">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button
                    disabled={page <= 1}
                    onClick={() => setPage((prev) => prev - 1)}
                >
                    Previous
                </button>
                <span style={{ margin: '0 10px' }}>
                    Page {pagination.current_page} / {pagination.total_page}
                </span>
                <button
                    disabled={page >= pagination.total_page}
                    onClick={() => setPage((prev) => prev + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
