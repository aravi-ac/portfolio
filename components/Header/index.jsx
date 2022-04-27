import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <p className={styles.nav}>About</p>
        <p className={styles.nav}>Contact</p>
      </div>
      <div className={styles.mid}>
        <h1>Aravi</h1>
      </div>
      <div className={styles.right}>
        <p className={styles.nav}>Career</p>
        <p className={styles.nav}>Projects</p>
      </div>
    </div>
  );
};

export default Header;
