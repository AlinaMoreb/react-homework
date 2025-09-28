import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const TextComponent = () => {
  const { language } = useContext(LanguageContext);

  const texts = {
    en: "Hello! This is a text in English.",
    ru: "Привет! Это текст на русском языке."
  };

  return <p>{texts[language]}</p>;
};

export default TextComponent;
