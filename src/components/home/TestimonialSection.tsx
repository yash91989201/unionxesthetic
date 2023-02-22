import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "config/sanity";

const TestimonialSection = () => {
  const [allTestimonial, setAllTestimonial] = useState<TestimonialType[]>();
  useEffect(() => {
    fetch("/api/fetchTestimonial")
      .then((res) => res.json())
      .then((data) => setAllTestimonial(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="px-6 bg-white sm:px-12">
      <div className="max-w-6xl py-16 mx-auto space-y-10 sm:py-20 sm:space-y-20 ">
        <p className="text-[clamp(24px,8vw,56px)] font-bold text-center italic text-amber-400">
          Client Testimonials
        </p>
        {/* testimony card */}
        <div className="flex flex-col items-center justify-center space-x-0 space-y-8 flex-rap md:flex-row md:space-x-8 md:space-y-0">
          {allTestimonial?.map((testimonial) => (
            <div
              key={testimonial._id}
              className="relative w-56 sm:w-72 h-[380px]"
            >
              <Image
                src={urlFor(testimonial.clientTestimonialImage).url()!}
                alt={testimonial.title}
                layout="fill"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center max-w-6xl mx-auto ">
          <Link href="/testimonials">
            <a className="px-4 py-2 text-sm font-semibold text-white rounded-full md:px-6 lg:text-lg bg-amber-400 hover:bg-amber-500 active:bg-amber-600">
              See More
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
