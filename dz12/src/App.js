import React, { useState } from "react";
import ValueDisplay from "./ValueDisplay";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <h1>Отслеживание текущего и предыдущего значения</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Введите текст..."
      />
      <ValueDisplay value={value} />
    </div>
  );
}

export default App;
