export interface TBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationYear: number;
  savedBy?: string;
  reviews?: TReview[];
  imgUrl?: string;
  description?: string;
};

export type TReview = {
  index: null | undefined;
  comment: string;
};

export type TLogin = {
  email: string;
  password: string;
};

export type TRegister = {
  address: string;
} & TLogin;

export type TAuth = {
  accessToken: string | null;
};

export type TFilterData = {
  genre?: string;
  publicationYear?: number;
};