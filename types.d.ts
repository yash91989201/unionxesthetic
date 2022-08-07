export type CommentType = {
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface PostType {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: {
      asset: {
        _ref: string;
      };
    };
  };
  description: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
  comments: CommentType[];
}

export interface ClientReviewType {
  _id: string;
  title: string;
  reviewVideoURL: string;
}

export interface TransformationType {
  _id: string;
  clientTransformationImage: {
    asset: {
      _ref: string;
    };
  };
  title: string;
}

export interface TesnimonialType {
  _id: string;
  clientTestimonialImage: {
    asset: {
      _ref: string;
    };
  };
  title: string;
}

export interface WelcomeVideoType {
  _id: string;
  title: string;
  videoId: string;
  welcomeVideoURL: string;
}
