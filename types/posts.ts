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
