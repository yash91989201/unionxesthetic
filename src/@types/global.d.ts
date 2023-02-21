export {};

declare global {
  type CommentType = {
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

  interface PostType {
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

  interface ClientReviewType {
    _id: string;
    title: string;
    reviewVideoURL: string;
  }

  interface TransformationType {
    _id: string;
    clientTransformationImage: {
      asset: {
        _ref: string;
      };
    };
    title: string;
  }

  interface TestimonialType {
    _id: string;
    clientTestimonialImage: {
      asset: {
        _ref: string;
      };
    };
    title: string;
  }
}
