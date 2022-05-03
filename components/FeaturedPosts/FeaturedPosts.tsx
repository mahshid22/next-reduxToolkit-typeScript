import { IPost } from "@/types/posts";
import React from "react";
import PostPreview from "../PostPreview";
import styles from "./FeaturedPosts.module.css";

type Props = {
  posts: IPost[];
};

const FeaturedPosts = (props: Props) => {
  const { posts } = props;

  return (
    <section className={styles.FeaturedPosts}>
      {!!posts &&
        posts.map((post) => {
          return (
            <PostPreview
              key={post.id}
              title={post.title}
              imageUrl={post.imageUrl}
              content={post.content}
              hits={post.hits}
              categoryId={post.categoryId}
              id={post.id}
            />
          );
        })}
    </section>
  );
};

export default FeaturedPosts;
