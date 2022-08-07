import { GetServerSideProps } from "next";
import { sanityClient } from "../sanity"
import { TransformationType } from "../types"
import Image from "next/image";
import { urlFor } from "../sanity"

interface PageProps {
    allTransformation: TransformationType[]
}

const ReviewSection = ({ allTransformation }: PageProps) => {

    return (
        <section className="px-6 sm:px-12">
            <div className="max-w-6xl mx-auto py-8 sm:py-16 space-y-8 sm:space-y-20 ">
                <p className="text-[clamp(16px,6vw,48px)] font-bold text-center italic text-amber-400">Client Transformations</p>
                {/* testimony card */}
                <div className="
                                mx-auto w-full max-w-6xl
                                flex flex-col md:flex-row items-center
                                space-x-0 md:space-x-8 space-y-8 md:space-y-0
                            ">
                    {
                        allTransformation?.map(transformation => <div key={transformation._id} className="relative w-96 aspect-square">
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