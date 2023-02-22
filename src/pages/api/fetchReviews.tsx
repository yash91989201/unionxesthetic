import { sanityClient } from "config/sanity";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function fetchReviews(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const query = `
        *[_type == "clientReview"]
        `;
    const allReviews = await sanityClient.fetch(query);
    res.status(200).json(allReviews);
  } catch (err) {
    res.status(500).json({ message: "Unable to fetch client review", err });
  }
}
