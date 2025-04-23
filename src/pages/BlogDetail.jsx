import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "./BlogDetail.css"

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const updatedPost = {
          ...data,
          title: data.title,
          body: data.body,
          imageUrl: `https://picsum.photos/seed/${data.id}/800/400`,
        };
        setPost(updatedPost);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch post:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading post...</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <>
    <Header />
    <div className="detail-wrapper">
    <Link to="/" className="back-link">← Back to Home</Link>
    <h1 className="detail-title">{post.title}</h1>
    <img src={post.imageUrl} alt="cover" className="detail-img" />
    <p className="detail-body">{post.body}</p>
  </div>
  <Footer />
  </>
  );
};

export default BlogDetail;
