import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./componentstyle/Navbar.module.css"; // Import styles as a module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Skyline Pirates</div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.current : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew" className={({ isActive }) => (isActive ? styles.current : "")}>
            Crew
          </NavLink>
        </li>
        <li>
          <NavLink to="/Relationships" className={({ isActive }) => (isActive ? styles.current : "")}>
            Relationships
          </NavLink>
        </li>
        <li>
          <NavLink to="/weapon" className={({ isActive }) => (isActive ? styles.current : "")}>
            Weapons
          </NavLink>
        </li>
        <li>
          <NavLink to="/alliance" className={({ isActive }) => (isActive ? styles.current : "")}>
            Alliances
          </NavLink>
        </li>
        <li>
          <NavLink to="/adventures" className={({ isActive }) => (isActive ? styles.current : "")}>
            Adventures
          </NavLink>
        </li>

        <li>
          <NavLink to="/ahievements" className={({ isActive }) => (isActive ? styles.current : "")}>
            Achievements
          </NavLink>
        </li>
      
        <li>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? styles.current : "")}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.current : "")}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
