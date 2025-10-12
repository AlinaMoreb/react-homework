// src/components/Articles.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Articles.module.css";

const articles = [
  { id: 1, title: "Что такое React?", content: "React — это библиотека для создания UI..." },
  { id: 2, title: "Хуки в React", content: "Хуки — это способ использовать состояние и другие функции React без классов." },
  { id: 3, title: "React Router", content: "React Router помогает создавать маршруты в SPA." },
];

function Articles() {
  return (
    <div className={styles.articles}>
      <h2>Список статей</h2>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;
