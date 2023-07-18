export type TBook = {
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
  comment: string;
};

export type TLogin = {
  email: string;
  password: string;
};

export type TRegister = {
  address: string;
} & TLogin;
