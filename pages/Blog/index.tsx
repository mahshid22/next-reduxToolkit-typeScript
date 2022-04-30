import FeaturedPosts from "@/components/FeaturedPosts";
import Layout from "@/components/Layout/Layout";
import MainFeaturedPost from "@/components/MainFeaturedPost";
import React from "react";
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <Layout>
      <main className={styles.main_content}>
        <MainFeaturedPost />
        <FeaturedPosts />
      </main>
    </Layout>
  );
};

export default Blog;
