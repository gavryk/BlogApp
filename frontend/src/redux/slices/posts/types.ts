export type PostsSliceTypes = {
  posts: PostTypes[];
};

export type PostTypes = {
  id: string;
  title: string;
  desc?: string;
  img: string;
};
