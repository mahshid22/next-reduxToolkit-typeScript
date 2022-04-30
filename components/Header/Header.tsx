import { useGetPostsCategoriesQuery } from "@/features/api/getBasicInfo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  const { data: PostsCategories } = useGetPostsCategoriesQuery();

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
        {PostsCategories &&
          PostsCategories.map((PostsCategorie) => {
            return (
              <Link as={`/Blog/${PostsCategorie.id}`} href="/Blog/[id]">
                <a>{PostsCategorie.name}</a>
              </Link>
            );
          })}
      </nav>
    </header>
  );
};

export default Header;
