import { Pencil, Trash2 } from 'lucide-react';

type PostTableProps = {
    posts: PostType[];
    onEdit: (post: PostType) => void;
    onDelete: (id: string) => void;
};

const PostTable: React.FC<PostTableProps> = ({ posts, onEdit, onDelete }) => (
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
            {posts.map(post => (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.description}</td>
                    <td>{post.tags.join(', ')}</td>
                    <td>
                        <div className="action-buttons">
                            <button onClick={() => onEdit(post)}><Pencil size={16} /></button>
                            <button onClick={() => onDelete(post.id)}><Trash2 size={16} /></button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default PostTable;
