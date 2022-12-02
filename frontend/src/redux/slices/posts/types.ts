export type PostsSliceTypes = {
  posts: PostTypes[];
  activeCat: string;
};

export type PostTypes = {
  id: string;
  title: string;
  desc?: string;
  img: string;
  date?: string;
  uid?: string;
  category?: string;
};
