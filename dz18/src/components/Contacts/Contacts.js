import React from "react";
import styles from "./Contacts.module.css";


import snapchatLogo from "../../assets/snapchat.jpg";
import facebookLogo from "../../assets/facebook.png";
import xLogo from "../../assets/x.png";

const Contacts = () => {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.infoBlock}>
        <h1 className={styles.title}>Контакты</h1>

        <ul className={styles.contactList}>
          <li>Телефон: +7 (900) 123-45-67</li>
          <li>Email: info@example.com</li>
        </ul>

        <form className={styles.form}>
          <input
            type="text"
            placeholder="Ваше имя"
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Ваша почта"
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Ваше сообщение"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Отправить
          </button>
        </form>
      </div>

      <div className={styles.socialBlock}>
        <p>Найдите нас на:</p>
        <div className={styles.socialLinks}>
          <a href="https://snapchat.com" target="_blank" rel="noreferrer">
            <img src={snapchatLogo} alt="Snapchat" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={facebookLogo} alt="Facebook" />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <img src={xLogo} alt="X (Twitter)" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
