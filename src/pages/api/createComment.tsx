import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";
import { ClientConfig } from "next-sanity";
import {
  NEXT_PUBLIC_SANITY_DATASET,
  SANITY_API_TOKEN,
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NODE_ENV,
} from "config";

const config: ClientConfig = {
  dataset: NEXT_PUBLIC_SANITY_DATASET,
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: NODE_ENV === "production",
  token: SANITY_API_TOKEN,
  apiVersion: "2022-03-25",
};

const client = sanityClient(config);

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { _id, name, email, comment } = JSON.parse(req.body);
  try {
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    });
    res.status(200).json({ message: "Successfully added comment" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unable to add comment", err });
  }
}
