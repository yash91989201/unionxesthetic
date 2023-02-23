import { createCurrentUserHook, createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import type { SanityClient } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NODE_ENV,
  NEXT_PUBLIC_SANITY_DATASET,
} from ".";

export const config = {
  dataset: NEXT_PUBLIC_SANITY_DATASET,
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: NODE_ENV === "production",
  apiVersion: "2022-03-25",
};

export const sanityClient: SanityClient = createClient(config);

export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source);

export const useCurentUser = createCurrentUserHook({
  projectId: config.projectId,
  dataset: config.dataset,
});
