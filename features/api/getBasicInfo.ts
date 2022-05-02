import { baseApi } from "./apiSlice";
import { PostComments, PostsCategories, PostsUrl, PostUrl } from "./Url";
import { Comments, IPost, Posts } from "@/types/posts";
export const getBasicInfo = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // **************** //
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

    // **************** //
    getPostsByCat: build.query<Posts, string>({
      query: (id) => `categories/${id}/posts`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts" as const, id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),

    // **************** //
    getPostById: build.query<IPost, string>({
      query: (id) => `${PostUrl}/${id}`,
      providesTags: (result, error, id) => [{ type: "Posts" as const, id }],
    }),

    // **************** //
    getPostsCategories: build.query<[{ id: number; name: string }], void>({
      query: () => PostsCategories,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Categories" as const, id })),
              { type: "Categories", id: "LIST" },
            ]
          : [{ type: "Categories", id: "LIST" }],
    }),

    // **************** //
    getPostcomments: build.query<Comments, string>({
      query: () => PostComments,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "comments" as const, id })),
              { type: "comments", id: "LIST" },
            ]
          : [{ type: "comments", id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostsCategoriesQuery,
  useGetPostsByCatQuery,
  useGetPostcommentsQuery,
} = getBasicInfo;
