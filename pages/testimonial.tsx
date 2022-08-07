import { GetServerSideProps } from "next";
import { sanityClient } from "../sanity"
import { TesnimonialType } from "../types"
import Image from "next/image";
import { urlFor } from "../sanity"

interface PageProps {
    allTestimonial: TesnimonialType[]
}

const testimonial = ({ allTestimonial }: PageProps) => {

    return (
        <section className="px-6 sm:px-12">
            <div className="max-w-6xl mx-auto py-8 sm:py-16 space-y-8 sm:space-y-20 ">
                <p className="text-[clamp(16px,6vw,48px)] font-bold text-center italic text-amber-400">Client Testimonials</p>
                {/* testimony card */}
                <div className="
                                mx-auto w-full max-w-6xl
                                flex flex-col  md:flex-row items-center
                                space-x-0 md:space-x-8 space-y-8 md:space-y-0
                            ">
                    {
                        allTestimonial?.map(testimonial => <div key={testimonial._id} className="relative w-[240px] h-72">
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