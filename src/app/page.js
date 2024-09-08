"use client"
import { useEffect, useState } from 'react';
import BlogCard from './components/BlogCard.js';
import Header from './components/Header';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [click,setClick]=useState(false)
  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then(res => res.json())
      .then(data => setPosts(data.data));
  }, [click]);

  console.log("posts",posts)

  return (
        <div>
      <Header />
      <div className="container mx-auto p-4">
        {posts.map(post => (
          <BlogCard key={post._id} post={post} setClick={setClick} />
        ))}
      </div>
    </div>
  );
}