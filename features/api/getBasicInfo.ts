import { baseApi } from "./apiSlice";
import { PostsUrl, PostUrl } from "./Url";
import { IPost, Posts } from "@/types/posts";
export const getBasicInfo = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Posts, void>({
      query: () => PostsUrl,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts" as const, id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),
    getPostById: build.query<IPost, string>({
      query: (id) => `${PostUrl}/${id}`,
      providesTags: (result, error, id) => [{ type: "Posts" as const, id }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostsQuery, useGetPostByIdQuery } = getBasicInfo;
