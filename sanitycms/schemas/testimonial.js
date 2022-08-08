export default {
  title: "Client Testimonial",
  name: "clientTestimonial",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
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
