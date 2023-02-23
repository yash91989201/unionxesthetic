import { NextSeo } from "next-seo";
import { sanityClient } from "config/sanity";
import type { GetServerSideProps } from "next";

interface PageProps {
  allReviews: ClientReviewType[];
}

export default function Reviews({ allReviews }: PageProps) {
  return (
    <>
      <NextSeo title="Client Reviews" description="" />
      <section className="px-6 sm:px-12">
        <div className="max-w-6xl py-8 mx-auto space-y-10 sm:py-16 sm:space-y-20 ">
          <p className="text-[clamp(24px,8vw,56px)] font-bold text-center italic text-amber-400">
            Client Reviews
          </p>
          {/* testimony card */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-12 place-items-center sm:place-items-start">
            {allReviews?.map(review => (
              <iframe
                key={review._id}
                className="w-full max-w-xs aspect-square"
                src={review.reviewVideoURL}
                allow="encrypted-media"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `
                    *[_type == "clientReview"]
                `;
  const allReviews = await sanityClient.fetch(query);
  return {
    props: {
      allReviews,
    },
  };
};

// flex flex-col flex-rap md:flex-row items-center
//      space-x-0 md:space-x-8 space-y-8 md:space-y-0
