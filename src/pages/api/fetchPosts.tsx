import { sanityClient } from "config/sanity";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function fetchPosts(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const query = `
                        *[_type == "post"]{
                            _id,
                            title,
                            author ->{
                              name,
                              image
                             },
                            description,
                            mainImage,
                            slug
                        }
                    `;
    const allPosts = await sanityClient.fetch(query);
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json({ message: "Unable to fetch blog posts", err });
  }
}
