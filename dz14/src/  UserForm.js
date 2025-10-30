import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "./redux/actions";

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !status.trim()) {
      alert("Введите имя и статус!");
      return;
    }
    setUserInfo(name, status);
    setName("");
    setStatus("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>Обновить информацию</h2>
      <input
        type="text"
        placeholder="Введите имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Введите статус"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default connect(null, { setUserInfo })(UserForm);
