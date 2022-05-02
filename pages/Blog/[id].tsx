import FeaturedPosts from "@/components/FeaturedPosts";
import Layout from "@/components/Layout/Layout";
import MainFeaturedPost from "@/components/MainFeaturedPost";
import { useGetPostsByCatQuery } from "@/features/api/getBasicInfo";
import { skipToken } from "@reduxjs/toolkit/dist/query/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./Blog.module.css";

const Blog = () => {
  const router = useRouter();
  const [id, setId] = useState<string | undefined>();
  const { data: posts, isLoading } = useGetPostsByCatQuery(id ?? skipToken);

  useEffect(() => {
    if (router.isReady) {
      if (typeof router.query?.id === "string") setId(router.query?.id);
    }
  }, [router]);

  return (
    <Layout>
      <main className={styles.main_content}>
        {posts ? (
          <>
            <MainFeaturedPost />
            <FeaturedPosts posts={posts} />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </Layout>
  );
};

export default Blog;
