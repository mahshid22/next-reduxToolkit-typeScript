import { IPost } from "@/types/posts";
import React from "react";
import styles from "./SinglePost.module.css";
import { increment } from "@/features/counter/reducer";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
type Props = { post: IPost };

const SinglePost = (props: Props) => {
  const { post } = props;
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <article className={styles.SinglePost}>
      <h2>{post.title}</h2>
      <p>Hits : {post.hits}</p>
      <p>{post.content}</p>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
    </article>
  );
};

export default SinglePost;
