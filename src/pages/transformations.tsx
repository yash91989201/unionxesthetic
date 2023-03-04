import Image from "next/image";
import { NextSeo } from "next-seo";
import { sanityClient, urlFor } from "@config/sanity";
import type { GetServerSideProps } from "next";

interface PageProps {
  allTransformation: TransformationType[];
}

export default function Transformations({ allTransformation }: PageProps) {
  return (
    <>
      <NextSeo
        title="Client Transformations"
        description="Here we have all the clients that have transformed their lives throught our guidance."
      />
      <section className="px-3 xs:px-6 sm:px-12">
        <div className="max-w-6xl py-8 mx-auto space-y-10 sm:py-16 sm:space-y-20 ">
          <h2 className="text-[clamp(24px,8vw,56px)] font-bold text-center italic text-gray-300">
            Client Transformations
          </h2>
          {/* testimony card */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 place-items-center sm:place-items-start">
            {allTransformation?.map(transformation => (
              <div
                key={transformation._id}
                className="relative w-56 xs:w-64 sm:w-full aspect-square"
              >
                <Image
                  src={urlFor(transformation.clientTransformationImage).url()}
                  alt=""
                  layout="fill"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `
                    *[_type == "clientTransformation"]
                `;
  const allTransformation = await sanityClient.fetch(query);
  return {
    props: {
      allTransformation,
    },
  };
};
