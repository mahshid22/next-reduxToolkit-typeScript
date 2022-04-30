import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <h2>Footer</h2>
      <p>Something here to give the footer a purpose!</p>
      <p>Copyright © Your Website 2022.</p>
    </footer>
  );
};

export default Footer;
