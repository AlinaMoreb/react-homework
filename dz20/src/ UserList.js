import React from "react";
import { useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((state) => state.users.list);

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
