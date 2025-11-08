import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuote } from "../features/quote/quoteSlice";
import styles from "./Quote.module.css";

const Quote = () => {
  const dispatch = useDispatch();
  const { quote, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2>Случайная цитата</h2>
      {status === "loading" && <p>Загрузка...</p>}
      {status === "failed" && <p>Ошибка: {error}</p>}
      {status === "succeeded" && quote && (
        <blockquote>
          <p>"{quote.quote}"</p>
          <footer>- {quote.author}</footer>
        </blockquote>
      )}
      <button onClick={() => dispatch(fetchQuote())}>Новая цитата</button>
    </div>
  );
};

export default Quote;
