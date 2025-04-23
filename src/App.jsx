import React from "react";
import BlogList from "./components/BlogList";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
        <BlogList />
      </main>
      <Footer />
    </>
  );
};

export default App;
