import {
  useGetPostsCategoriesQuery,
  usePrefetch,
} from "@/features/api/getBasicInfo";
import Link from "next/link";
import React, { useCallback } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const { data: PostsCategories } = useGetPostsCategoriesQuery();
  const prefetchPage = usePrefetch("getPostsByCat");

  const prefetchNext = (id: number) => {
    console.log(id);
    if (id) prefetchPage(id.toString());
  };
  return (
    <header className={styles.Header}>
      <section className={styles.Header_signin}>
        <h1>my blog</h1>
        <button className={styles.header_signout}>Sign Up!</button>
      </section>
      <nav className={styles.header_navBar}>
        <Link href="/Blog">
          <a>Home</a>
        </Link>
        {PostsCategories &&
          PostsCategories.map((PostsCategorie) => {
            return (
              <Link
                as={`/Blog/${PostsCategorie.id}`}
                href="/Blog/[id]"
                key={PostsCategorie.id}
              >
                <a onMouseEnter={() => prefetchNext(PostsCategorie.id)}>
                  {PostsCategorie.name}
                </a>
              </Link>
            );
          })}
      </nav>
    </header>
  );
};

export default Header;
