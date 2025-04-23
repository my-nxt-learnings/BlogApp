import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <h1>📝 React Blog</h1>
    <nav>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/create" className="nav-link">Create Blog</Link>
    </nav>
  </header>
);

export default Header;
