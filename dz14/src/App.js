import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./User";
import UserForm from "./UserForm";

function App() {
  return (
    <Provider store={store}>
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <h1>Управление пользователем (React + Redux)</h1>
        <User />
        <UserForm />
      </div>
    </Provider>
  );
}

export default App;

