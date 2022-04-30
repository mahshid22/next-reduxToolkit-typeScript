import { IPost } from "@/types/posts";
import Link from "next/link";
import React from "react";
import styles from "./PostPreview.module.css";

const PostPreview = (props: Partial<IPost>) => {
  const { id, title, content, hits } = props;
  return (
    <section className={styles.FeaturedPosts_prev}>
      <section>
        <h3>{title}</h3>
        <p className={styles.post_paragraph}>Hits : {hits}</p>
        <p className={styles.post_paragraph}>
          {content?.substring(0, 150)} ...
        </p>
        <Link as={`/Blog/${id}`} href="/Blog/[id]">
          <a className={styles.countinueLink}>countinue Reading ...</a>
        </Link>
      </section>
      <img src="/images/2.jpg" alt="" />
    </section>
  );
};

export default PostPreview;
