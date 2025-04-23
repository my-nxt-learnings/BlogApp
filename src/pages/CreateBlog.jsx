import { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "./CreateBlog.css";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(1); // just a placeholder
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = { title, body, userId };

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!res.ok) throw new Error("Failed to create post");
      const data = await res.json();

      setStatus("✅ Blog post created! ID: " + data.id);
      setTitle("");
      setBody("");
    } catch (err) {
      setStatus("❌ Failed to create post");
    }
  };

  return (
    <>
    <Header />
    <div className="create-blog">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Body:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} required />

        <button type="submit">Create Blog</button>
      </form>
      {status && <p className="status">{status}</p>}
    </div>
    <Footer />
    </>
  );
}

export default CreateBlog;
