import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <section className={styles.Header_signin}>
        <h2>my blog</h2>
        <button className={styles.header_signout}>Sign Up!</button>
      </section>
      <nav className={styles.header_navBar}>
        <Link href="/Blog">
          <a>Home</a>
        </Link>
        <Link href="/Blog">
          <a>Home</a>
        </Link>
        <Link href="/Blog">
          <a>Home</a>
        </Link>
        <Link href="/Blog">
          <a>Home</a>
        </Link>
        <Link href="/Blog">
          <a>Home</a>
        </Link>
        <Link href="/Blog">
          <a>Home</a>
        </Link>
        <Link href="/Blog">
          <a>Home</a>
        </Link>
        <Link href="/Blog">
          <a>Home</a>
        </Link>
        <Link href="/Blog">
          <a>Home</a>
        </Link>
        <Link href="/Blog">
          <a>Home</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
