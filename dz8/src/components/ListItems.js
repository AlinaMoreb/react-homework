import React, { useState, useEffect } from "react";

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  // Исправленный useEffect — теперь он вызывается только один раз при монтировании
  useEffect(() => {
    console.log("Компонент ListItems обновлен");
  }, []); // пустой массив зависимостей

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Список элементов</h2>
      <input
        type="text"
        placeholder="Введите элемент"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: "8px", marginRight: "8px" }}
      />
      <button onClick={addItem} style={{ padding: "8px 12px" }}>
        Добавить
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {items.map((item, index) => (
          <li key={index} style={{ padding: "4px 0" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;

