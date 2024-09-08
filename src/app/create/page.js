"use client"
import Header from '../components/Header';
import Form from '../components/Form';

export default function CreatePost() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }}
    >
      <Header />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-2xl p-8 md:p-12 max-w-lg w-full transform transition-transform hover:scale-105 duration-300 ease-in-out">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Create a New Post
          </h1>
          <Form />
        </div>
      </div>
    </div>
  );
}
