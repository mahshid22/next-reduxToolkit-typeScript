import { usePrefetch } from "@/features/api/getBasicInfo";
import { IPost } from "@/types/posts";
import Link from "next/link";
import React, { useCallback } from "react";
import styles from "./PostPreview.module.css";

const PostPreview = (props: Partial<IPost>) => {
  const prefetchPosts = usePrefetch("getPostById");
  const prefetchPostComment = usePrefetch("getPostcomments");
  const prefetchPost = (id: number | undefined) => {
    console.log(id);
    if (id) {
      prefetchPostComment(id.toString());
      prefetchPosts(id.toString());
    }
  };
  const { id, title, content, hits, categoryId } = props;
  return (
    <section className={styles.FeaturedPosts_prev}>
      <section>
        <div>
          <h3>{title}</h3>
          <p className={styles.post_paragraph}>Cat : {categoryId}</p>
          <p className={styles.post_paragraph}>Hits : {hits}</p>
        </div>
        <p className={styles.post_paragraph}>
          {content?.substring(0, 150)} ...
        </p>
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a
            onMouseEnter={() => prefetchPost(id)}
            className={styles.countinueLink}
          >
            countinue Reading ...
          </a>
        </Link>
      </section>
      <img src="/images/2.jpg" alt="" />
    </section>
  );
};

export default PostPreview;
