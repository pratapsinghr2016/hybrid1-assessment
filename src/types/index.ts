import { ReactNode } from "react";

export type Fn = () => void;

export type PaginationProp = {
  currentPage: number;
  onNextClick: Fn;
  onPrevClick: Fn;
  onPageNumberClick: (pageNumber: number) => void;
};

export type LayoutProps = {
  children: ReactNode;
};

export type CardComponentProps = {
  title: string;
  author: string;
  id: string;
  comments: string;
  relevancy: string;
  points: string;
};

export type CommentType = {
  text: string;
  id: string;
  created_at: string;
};

export type DetailsProps = {
  data: {
    author: string;
    created_at: string;
    title: string;
    type: string;
    children: [CommentType];
  };
};

export type ShowListProp = {
  title: string;
  author: string;
  points: string;
  objectID: string;
  num_comments: string;
  relevancy_score: string;
};

export type HomeProps = {
  data: {
    hits: [any];
  };
};

export type FnPromise = (value: string) => void;
