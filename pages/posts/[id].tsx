import Layout from "@/components/Layout/Layout";
import PostComments from "@/components/PostComments";
import SinglePost from "@/components/SinglePost";
import { useGetPostByIdQuery } from "@/features/api/getBasicInfo";
import { skipToken } from "@reduxjs/toolkit/dist/query/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./posts.module.css";

const Blog: React.FC = () => {
  const router = useRouter();
  const [id, setId] = useState<string | undefined>();
  const {
    data: post,
    isFetching,
    isSuccess,
  } = useGetPostByIdQuery(id ?? skipToken);

  useEffect(() => {
    if (router.isReady) {
      if (typeof router.query?.id === "string") setId(router.query?.id);
    }
  }, [router]);

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
