import Layout from "@/components/Layout/Layout";
import PostComments from "@/components/PostComments";
import SinglePost from "@/components/SinglePost";
import React from "react";
import styles from "./Blog.module.css";

const Blog: React.FC = () => {
  return (
    <Layout>
      <main className={styles.main_content}>
        <SinglePost />
        <PostComments />
      </main>
    </Layout>
  );
};

export default Blog;
