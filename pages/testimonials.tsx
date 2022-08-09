import { NextSeo } from "next-seo";
import Image from "next/image";
import { sanityClient } from "../sanity"
import { urlFor } from "../sanity"
import { GetServerSideProps } from "next";
import { TestimonialType } from "../types"

interface PageProps {
    allTestimonial: TestimonialType[]
}

const testimonial = ({ allTestimonial }: PageProps) => {

    return (

        <>
            <NextSeo
                title="Client Testimonials"
                description=""
            />
            <section className="px-6 sm:px-12">
                <div className="max-w-6xl mx-auto py-8 sm:py-16 space-y-8 sm:space-y-20 ">
                    <p className="text-[clamp(24px,8vw,56px)] font-bold text-center italic text-amber-400">Client Testimonials</p>
                    {/* testimony card */}
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]  gap-12 place-items-center sm:place-items-start">
                        {
                            allTestimonial?.map(testimonial => <div key={testimonial._id} className="relative w-80 h-96">
                                <Image
                                    src={urlFor(testimonial.clientTestimonialImage).url()!}
                                    alt=""
                                    layout="fill"
                                />
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default testimonial


export const getServerSideProps: GetServerSideProps = async () => {
    const query = `
                    *[_type == "clientTestimonial"]
                `;
    const allTestimonial = await sanityClient.fetch(query)
    return {
        props: {
            allTestimonial
        }
    }
}