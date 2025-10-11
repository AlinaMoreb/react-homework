
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CatImage.module.css";

function CatImage() {
  const [catUrl, setCatUrl] = useState("");
  const [loading, setLoading] = useState(true);

  
  const fetchCatImage = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://api.thecatapi.com/v1/images/search");
      setCatUrl(response.data[0].url);
    } catch (error) {
      console.error("Ошибка при загрузке изображения:", error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Случайная кошка 🐾</h1>

      {loading ? (
        <p className={styles.loading}>Загрузка...</p>
      ) : (
        <img src={catUrl} alt="Cat" className={styles.image} />
      )}

      <button onClick={fetchCatImage} className={styles.button}>
        Показать другую
      </button>
    </div>
  );
}

export default CatImage;
