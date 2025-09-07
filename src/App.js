import React from "react";
import Rating from "./Rating";
import List from "./List";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Оцените приложение ⭐</h1>
      <Rating />

      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Моё React-приложение
      </h1>
      <List />
    </div>
  );
}

export default App;
