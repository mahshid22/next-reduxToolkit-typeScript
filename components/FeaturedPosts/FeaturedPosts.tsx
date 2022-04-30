import { useGetPostsQuery } from "@/features/api/getBasicInfo";
import { Posts } from "@/types/posts";
import React from "react";
import PostPreview from "../PostPreview";
import styles from "./FeaturedPosts.module.css";
const emptyArray: Posts = [];

const FeaturedPosts = () => {
  const { posts } = useGetPostsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      posts: data ?? emptyArray,
    }),
  });

  return (
    <section className={styles.FeaturedPosts}>
      {!!posts.length &&
        posts.map((post) => {
          return (
            <PostPreview
              key={post.id}
              title={post.title}
              imageUrl={post.imageUrl}
              content={post.content}
              hits={post.hits}
              id={post.id}
            />
          );
        })}
    </section>
  );
};

export default FeaturedPosts;
