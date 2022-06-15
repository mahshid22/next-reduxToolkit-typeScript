import React from "react";
import styles from "./PostComments.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Comments } from "@/types/posts";
type Input = { textAreaID: string };
type Props = { comments: Comments };
const PostComments = (props: Props) => {
  const { comments } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.PostComments}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("textAreaID")} placeholder="comment" />
        <input type="submit" />
      </form>
      <section>
        {comments && comments.length ? (
          comments.map((comment) => {
            return (
              <>
                <p className={styles.commentP}>
                  {comment.body}{" "}
                  <span className={styles.commentSpan}>{comment.likes}</span>
                  <img
                    className={styles.commentImg}
                    src="/images/icons/R.png"
                    alt="likes"
                  />
                </p>
              </>
            );
          })
        ) : !comments.length ? (
          <div>no comment</div>
        ) : (
          <div>Loading...</div>
        )}
      </section>
    </div>
  );
};

export default PostComments;
