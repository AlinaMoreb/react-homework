
import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <h1>Добро пожаловать в блог!</h1>
      <p>Здесь вы найдёте интересные статьи о React и веб-разработке 🚀</p>
    </div>
  );
}

export default Home;
