import FeaturedPosts from "@/components/FeaturedPosts";
import Layout from "@/components/Layout/Layout";
import MainFeaturedPost from "@/components/MainFeaturedPost";
import { useGetPostsQuery } from "@/features/api/getBasicInfo";
import React from "react";
import styles from "./Blog.module.css";

const Blog = () => {
  const { data: posts, isLoading } = useGetPostsQuery();

  return (
    <Layout>
      <main className={styles.main_content}>
        {posts ? (
          <>
            <MainFeaturedPost />
            <FeaturedPosts posts={posts} />
          </>
        ) : (
          <div>Loading ...</div>
        )}
      </main>
    </Layout>
  );
};

export default Blog;
