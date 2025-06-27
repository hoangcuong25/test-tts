import React, { useState, useEffect } from 'react';
import './PostModal.css'

type PostModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { title: string; content: string; tags: string }) => void;
    initialData?: { title: string; content: string; tags: string };
};

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit, initialData }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setContent(initialData.content);
            setTags(initialData.tags);
        } else {
            setTitle('');
            setContent('');
            setTags('');
        }
    }, [initialData]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{initialData ? 'Edit Post' : 'Add New Post'}</h2>
                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
                <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
                <input value={tags} onChange={e => setTags(e.target.value)} placeholder="Tags (comma-separated)" />
                <div className="modal-actions">
                    <button onClick={() => onSubmit({ title, content, tags })}>
                        {initialData ? 'Update' : 'Create'}
                    </button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default PostModal;
