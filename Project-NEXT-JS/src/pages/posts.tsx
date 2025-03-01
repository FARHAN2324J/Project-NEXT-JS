import '../styles/globals.css';
import { useEffect, useState } from 'react';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  // Load posts from localStorage on component mount
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  // Function to delete a post
  const deletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div className="posts-container">
      <h2 className="text-xl font-bold text-[#9ca3af] my-5">All Posts</h2>
      <div className="my-5 mx-8 grid-post">
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="post">
              {post.image && <img src={post.image} alt="Uploaded" />}
              <h3 className="p-5">Location: {post.name}</h3>
              <p className="p-5">Description: {post.description}</p>
              <button 
                onClick={() => deletePost(index)} 
                className="mt-2 bg-red-500 text-white px-4 py-2 mx-4 my-2 rounded"
              >
                Delete Post
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllPosts;
