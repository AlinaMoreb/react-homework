import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button className={styles.button} onClick={toggleLanguage}>
      {language === "en" ? "Switch to Russian" : "Переключить на English"}
    </button>
  );
};

export default LanguageSwitcher;
