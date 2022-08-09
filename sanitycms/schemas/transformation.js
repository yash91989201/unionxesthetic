export default {
  title: "Client Transformation",
  name: "clientTransformation",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    {
      title: "Show on landing page",
      name: "showOnLandingPage",
      type: "boolean",
    },
    {
      title: "Client Transformation Image",
      name: "clientTransformationImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
