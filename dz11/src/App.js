// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/Article";
import styles from "./App.module.css";



function App() {
  return (
<div className={styles.app}>

      <Router>
        <Navbar />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<Article />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

