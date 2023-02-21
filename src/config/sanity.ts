import {
  createCurrentUserHook,
  createClient,
  SanityClient,
  ClientConfig,
} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const config: ClientConfig | any = {
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-03-25",
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient: SanityClient = createClient(config);

export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source);

export const useCurentUser = createCurrentUserHook({
  projectId: config.projectId!,
  dataset: config.dataset,
});
