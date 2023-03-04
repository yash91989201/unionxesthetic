import { sanityClient } from "@config/sanity";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function fetchTestimonial(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const query = `
        *[_type == "clientTestimonial" && showOnLandingPage == true] | order(_createdAt desc) [0..2] {
          _id,
          clientTestimonialImage,
          title,
        }
        `;
    const allTestimonial = await sanityClient.fetch(query);
    res.status(200).json(allTestimonial);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Unable to fetch client testimonial", err });
  }
}
