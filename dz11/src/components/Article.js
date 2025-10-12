
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Article.module.css";

const articles = [
  { id: 1, title: "Что такое React?", content: "React — это библиотека для создания UI..." },
  { id: 2, title: "Хуки в React", content: "Хуки — это способ использовать состояние и другие функции React без классов." },
  { id: 3, title: "React Router", content: "React Router помогает создавать маршруты в SPA." },
];

function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return <p>Статья не найдена 😿</p>;
  }

  return (
    <div className={styles.article}>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <button onClick={() => navigate(-1)} className={styles.button}>
        ← Назад
      </button>
    </div>
  );
}

export default Article;
