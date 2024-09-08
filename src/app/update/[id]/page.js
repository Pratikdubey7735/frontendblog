"use client";
import { useEffect, useState } from 'react';
import Header from '../../components/Header';

export default function ViewPost({ params }) {
  const { id } = params;
  const [post, setPost] = useState(null);
  const [editablePost, setEditablePost] = useState(null);

  useEffect(() => {
    const get = async () => {
      if (id) {
        await fetch(`https://backendblog-fitn.onrender.com/api/id`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id })
        })
          .then(res => res.json())
          .then(data => {
            setPost(data.data);
            setEditablePost(data.data);
          })
          .catch(error => console.error('Error fetching post:', error));
      }
    };
    get();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditablePost(prevPost => ({
      ...prevPost,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    if (editablePost) {
      await fetch(`https://backendblog-fitn.onrender.com/api/update`, {
        method: 'POST', // Ensure the method matches your backend setup
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editablePost)
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === 'Post updated successfully') {
            setPost(editablePost);
            alert('Post updated successfully!');
          } else {
            alert('Failed to update post.');
          }
        })
        .catch(error => {
          console.error('Error updating post:', error);
          alert('Error updating post.');
        });
    }
  };

  if (!post) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6 md:p-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r to-teal-500 text-white p-6">
            <input
              type="text"
              name="title"
              value={editablePost.title}
              onChange={handleChange}
              className="w-full text-2xl font-bold bg-transparent text-white border-none outline-none"
              placeholder="Post Title"
            />
          </div>
          <div className="p-6">
            <textarea
              name="content"
              value={editablePost.content}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md"
              rows="10"
              placeholder="Post Content"
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleUpdate}
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
