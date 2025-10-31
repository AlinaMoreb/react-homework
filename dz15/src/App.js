import React, { useState, useMemo, useCallback } from 'react';
import UserList from './UserList';

function App() {

  const userList = useMemo(() => [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eva' }
  ], []);

  
  const [filter, setFilter] = useState('');

  
  const filterUsers = useCallback((text) => {
    return userList.filter(user =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
  }, [userList]);

  const filteredUsers = useMemo(() => {
    return filterUsers(filter);
  }, [filter, filterUsers]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Фильтр пользователей</h2>
      <input
        type="text"
        placeholder="Введите имя..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: '8px', marginBottom: '20px', width: '200px' }}
      />

      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;

