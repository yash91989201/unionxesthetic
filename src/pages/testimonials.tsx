import { NextSeo } from "next-seo";
import Image from "next/image";
import { sanityClient, urlFor } from "config/sanity";
import { GetServerSideProps } from "next";

interface PageProps {
  allTestimonial: TestimonialType[];
}

const testimonials = ({ allTestimonial }: PageProps) => {
  return (
    <>
      <NextSeo
        title="Client Testimonials"
        description="Look for your self what our clients have to say."
      />
      <section className="px-6 sm:px-12">
        <div className="max-w-6xl py-8 mx-auto space-y-10 sm:py-16 sm:space-y-20 ">
          <p className="text-[clamp(24px,8vw,56px)] font-bold text-center italic text-amber-400">
            Client Testimonials
          </p>
          {/* testimony card */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]  gap-12 place-items-center sm:place-items-start">
            {allTestimonial?.map(testimonial => (
              <div key={testimonial._id} className="relative w-80 h-96">
                <Image
                  src={urlFor(testimonial.clientTestimonialImage).url()!}
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
};

export default testimonials;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `
                    *[_type == "clientTestimonial"]
                `;
  const allTestimonial = await sanityClient.fetch(query);
  return {
    props: {
      allTestimonial,
    },
  };
};
