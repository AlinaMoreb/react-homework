import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fakeToken = "12345abcde"; // имитация ответа сервера

    dispatch(login({ user: { email }, token: fakeToken }));
    navigate("/profile");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Введите email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px", margin: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
