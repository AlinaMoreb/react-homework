import React from "react";
import { LanguageProvider } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import TextComponent from "./TextComponent";

function App() {
  return (
    <LanguageProvider>
      <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
        <LanguageSwitcher />
        <TextComponent />
      </div>
    </LanguageProvider>
  );
}

export default App;

