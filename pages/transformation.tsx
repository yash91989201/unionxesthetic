import Image from "next/image";
import { NextSeo } from "next-seo";
import { sanityClient } from "../sanity"
import { urlFor } from "../sanity"
import { GetServerSideProps } from "next";
import { TransformationType } from "../types"

interface PageProps {
    allTransformation: TransformationType[]
}

const ReviewSection = ({ allTransformation }: PageProps) => {

    return (
        <>
            <NextSeo
                title="Client Transformations"
                description=""
            />
            <section className="px-6 sm:px-12">
                <div className="max-w-6xl mx-auto py-8 sm:py-16 space-y-8 sm:space-y-20 ">
                    <h2 className="text-[clamp(16px,6vw,48px)] font-bold text-center italic text-amber-400">Client Transformations</h2>
                    {/* testimony card */}
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-12 place-items-center sm:place-items-start">
                        {
                            allTransformation?.map(transformation => <div key={transformation._id} className="relative w-60 aspect-square">
                                <Image
                                    src={urlFor(transformation.clientTransformationImage).url()!}
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

export default ReviewSection


export const getServerSideProps: GetServerSideProps = async () => {
    const query = `
                    *[_type == "clientTransformation"]
                `;
    const allTransformation = await sanityClient.fetch(query)
    return {
        props: {
            allTransformation
        }
    }
}