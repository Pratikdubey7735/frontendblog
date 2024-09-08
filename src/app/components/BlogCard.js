"use client";
import Button from './Button';
import { useRouter } from 'next/navigation';

export default function BlogCard({ post, setClick }) {
  const router = useRouter();

  const handleDelete = async () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this post?");
    if (!isConfirmed) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/api/delete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: post._id }),
      });

      if (response.ok) {
        setClick(true);
        router.refresh();
      } else {
        console.error('Failed to delete the post.');
      }
    } catch (error) {
      console.error('Error deleting the post:', error);
    }
  };

  const handleClick = () => {
    router.push(`/id/${post._id}`);
  };

  const handleUpdate = () => {
    router.push(`/update/${post._id}`);
  };

  console.log("post at blog", post._id);

  return (
    <div className="relative shadow-lg rounded-lg overflow-hidden bg-white transition-shadow duration-300 ease-in-out hover:shadow-2xl border border-gray-200 m-4">
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("https://source.unsplash.com/random/800x600")' }}></div>

      <div className="relative p-6 bg-gray-500 rounded-lg">
        <h2 className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors duration-200">
          {post.title}
        </h2>
        <p className="mt-2 text-gray-200">
          {post.content.substring(0, 100)}...
        </p>
        <div className="mt-4 flex justify-between items-center">
          <Button onClick={handleClick} className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-200">
            View
          </Button>
          <Button onClick={handleUpdate} className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-200">
            Update
          </Button>
          <Button onClick={handleDelete} className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-200">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
