import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogList.css"

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const updatedPosts = data.slice(0, 10).map((post, index) => ({
          id: post.id,
          title: post.title,
          body: post.body,
          imageUrl: `https://picsum.photos/seed/${index + 1}/600/300`
        }));
        setPosts(updatedPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;

  return (
    <div className="blogcontainer">
      <h2>Recent Blog Posts</h2>
      {posts.map((post) => (
        <Link to={`post/${post.id}`} key={post.id}>
        <div
          className="blog-post"
        >
          <img
            src={post.imageUrl}
            alt="Blog Cover"
           className="blog-image"
          />
          <h3  className="blog-title">{post.title}</h3>
          <p className="blog-body">{post.body}</p>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
