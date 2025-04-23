import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} React Blog. Built with 💙</p>
  </footer>
);

export default Footer;
