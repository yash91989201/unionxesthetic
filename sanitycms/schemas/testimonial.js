export default {
  title: "Client Testimonial",
  name: "clientTestimonial",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    {
      title: "Show on landing page",
      name: "showOnLandingPage",
      type: "boolean",
    },
    {
      title: "Client Testimonial Image",
      name: "clientTestimonialImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
