import Image from "next/image";
import React from "react";
import styles from "./FeaturedPosts.module.css";

const FeaturedPosts = () => {
  return (
    <section className={styles.FeaturedPosts}>
      <section className={styles.FeaturedPosts_prev}>
        <section>
          <h2>title</h2>
          <p>nov 1</p>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
          <a href="#">countinue Reading ...</a>
        </section>
        <img src="/images/2.jpg" alt="" />
      </section>
      <section className={styles.FeaturedPosts_prev}>
        <section>
          <h2>title</h2>
          <p>nov 1</p>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
          <a href="#">countinue Reading ...</a>
        </section>
        <img src="/images/2.jpg" alt="" />
      </section>
      <section className={styles.FeaturedPosts_prev}>
        <section>
          <h2>title</h2>
          <p>nov 1</p>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
          <a href="#">countinue Reading ...</a>
        </section>
        <img src="/images/2.jpg" alt="" />
      </section>
    </section>
  );
};

export default FeaturedPosts;
