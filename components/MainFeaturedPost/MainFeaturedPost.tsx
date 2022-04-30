import React from "react";
import styles from "./MainFeaturedPost.module.css";

const MainFeaturedPost: React.FC = () => {
  return (
    <div className={styles.MainFeaturedPost}>
      <section className={styles.MainFeaturedPost_section}>
        <h1>Title Of Post</h1>
        <p>
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents.
        </p>
        <a href="#">countinue Reading</a>
      </section>
    </div>
  );
};

export default MainFeaturedPost;
