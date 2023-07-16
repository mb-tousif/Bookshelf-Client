export type TBook = {
    _id: string;
    title: string;
    author: string;
    genre: string;
    publicationYear: number;
    savedBy: string;
    reviews: TReview [];
    imgUrl?: string;
    description?: string;
  };

  export type TReview= {
    user: string;
    comment: string;
  }