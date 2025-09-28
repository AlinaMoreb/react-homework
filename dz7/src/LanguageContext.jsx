import React, { createContext, useState } from "react";

// Создаем контекст
export const LanguageContext = createContext();

// Провайдер контекста
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // "en" по умолчанию

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ru" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
