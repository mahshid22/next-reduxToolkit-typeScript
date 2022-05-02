export interface IPost {
  id: number;
  title: string;
  userId: number;
  content: string;
  likes: number;
  hits: number;
  categoryId: number;
  imageUrl: string;
}

export type Posts = IPost[];

export interface IComment {
  id: number;
  userId: number;
  likes: number;
  body: string;
  postId: number;
}

export type Comments = IComment[];
