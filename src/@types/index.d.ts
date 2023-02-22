export {};

declare global {
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
