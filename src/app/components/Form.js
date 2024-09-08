import { useState } from 'react';
import Button from './Button';

export default function Form() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:4000/api/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });
  
      if (response.ok) {
        alert("Created Successfully");
        const data = await response.json();
        console.log('Post created successfully:', data);
        setTitle('');
        setContent('');     
      } else {
        alert("Created Unsuccessfully");
        console.error('Failed to create post:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto transform transition-transform hover:scale-105 duration-300 ease-in-out"
    >
      <div className="flex flex-col">
        <label htmlFor="title" className="text-sm font-semibold text-gray-800">
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200 ease-in-out"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="content" className="text-sm font-semibold text-gray-800">
          Content
        </label>
        <textarea
          id="content"
          placeholder="Enter post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200 ease-in-out"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-md shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform transition-transform hover:scale-105 duration-300 ease-in-out"
      >
        Create Post
      </Button>
    </form>
  );
}