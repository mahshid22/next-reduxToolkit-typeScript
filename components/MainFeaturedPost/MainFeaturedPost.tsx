import { useGetPostsQuery } from "@/features/api/getBasicInfo";
import Link from "next/link";
import React from "react";
import styles from "./MainFeaturedPost.module.css";

const MainFeaturedPost: React.FC = () => {
  const { post } = useGetPostsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      post: data?.find((post) => post.id === 1),
    }),
  });
  return (
    <div className={styles.MainFeaturedPost}>
      {post && (
        <section className={styles.MainFeaturedPost_section}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link as={`/Blog/${post.id}`} href="/Blog/[id]">
            <a className={styles.countinueLink}>countinue Reading ...</a>
          </Link>
        </section>
      )}
    </div>
  );
};

export default MainFeaturedPost;
