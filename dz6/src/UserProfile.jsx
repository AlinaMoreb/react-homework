import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./UserProfile.module.css";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://randomuser.me/api");
      setUser(response.data.results[0]);
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  return (
    <div className={styles.card}>
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className={styles.avatar}
      />
      <h2>
        {user.name.first} {user.name.last}
      </h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>
        Location: {user.location.city}, {user.location.country}
      </p>
      <button onClick={fetchUser} className={styles.button}>
        Load New User
      </button>
    </div>
  );
}

export default UserProfile;
