import { IPost } from "@/types/posts";
import React from "react";
import styles from "./SinglePost.module.css";

type Props = { post: IPost };

const SinglePost = (props: Props) => {
  const { post } = props;
  return (
    <article className={styles.SinglePost}>
      <h2>{post.title}</h2>
      <p>Hits : {post.hits}</p>
      <p>{post.content}</p>
    </article>
  );
};

export default SinglePost;
