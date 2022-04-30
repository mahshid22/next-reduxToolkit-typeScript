import FeaturedPosts from "@/components/FeaturedPosts";
import Layout from "@/components/Layout/Layout";
import MainFeaturedPost from "@/components/MainFeaturedPost";
import { useGetPostsQuery } from "@/features/api/getBasicInfo";
import React from "react";
import styles from "./posts.module.css";

const Post = () => {
  const { data: posts } = useGetPostsQuery();
  return (
    <Layout>
      <main className={styles.main_content}>
        {posts && (
          <>
            <MainFeaturedPost />
            <FeaturedPosts posts={posts} />
          </>
        )}
      </main>
    </Layout>
  );
};

export default Post;
