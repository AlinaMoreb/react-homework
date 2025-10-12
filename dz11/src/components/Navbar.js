
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>
        Главная
      </NavLink>
      <NavLink to="/articles" className={({ isActive }) => isActive ? styles.active : ""}>
        Статьи
      </NavLink>
    </nav>
  );
}

export default Navbar;
