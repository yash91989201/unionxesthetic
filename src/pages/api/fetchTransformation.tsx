import { sanityClient } from "config/sanity";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function fetchTransformation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const query = `
        *[_type == "clientTransformation" && showOnLandingPage == true] | order(_createdAt desc) [0..2] {
          _id,
          clientTransformationImage,
          title,
        }
        `;
    const allTransformation = await sanityClient.fetch(query);
    res.status(200).json(allTransformation);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Unable to fetch client transformation", err });
  }
}
