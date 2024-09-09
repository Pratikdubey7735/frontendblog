"use client";
import { useEffect, useState } from 'react';
import Header from '../../components/Header';

export default function ViewPost({params}) {
  const {id}=params
  const [post, setPost] = useState(null);
  useEffect(() => {
    const get=async ()=>{
      if (id) {
        await fetch(`https://backendblogsec.vercel.app/api/id`,{
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({id})
        })
          .then(res => res.json())
          .then(data => setPost(data.data))
          .catch(error => console.error('Error fetching post:', error));
      }

    }
    get()
  }, [id]);
  console.log(post);
  
  if (!post) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6 md:p-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r  to-teal-500 text-white p-6">
            <h1 className="text-4xl text-black font-extrabold">{post.title}</h1>
          </div>
          <div className="p-6">
            <p className="text-gray-800 text-lg">{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
