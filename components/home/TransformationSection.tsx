import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "../../sanity"
import { TransformationType } from "../../types"

const TransformationSection = () => {
    const [allTransformation, setAllTransformation] = useState<TransformationType[]>()
    useEffect(() => {
        fetch("/api/fetchTransformation")
            .then(res => res.json())
            .then(data => setAllTransformation(data))
            .catch(err => { console.log(err) })
    }, [])
    return (
        <section className="px-6 sm:px-12 bg-gray-600">
            <div className="max-w-6xl mx-auto py-16 sm:py-20 space-y-10 sm:space-y-20 ">
                <p className="text-[clamp(24px,8vw,56px)] font-bold text-center italic text-amber-400">Client Transformations</p>
                {/* testimony card */}
                <div className=" flex flex-col  md:flex-row justify-center items-center space-x-0 md:space-x-8 space-y-12 md:space-y-0 ">
                    {
                        allTransformation?.map(transformation => <div key={transformation._id} className="relative w-56 sm:w-96 aspect-square">
                            <Image
                                src={urlFor(transformation.clientTransformationImage).url()!}
                                alt={transformation.title}
                                layout="fill"
                            />
                        </div>)
                    }
                </div>
                <div className="max-w-6xl mx-auto flex justify-center ">
                    <Link href="/transformations">
                        <a className="py-2 px-4 md:px-6 rounded-full text-sm lg:text-lg  font-semibold bg-amber-400 hover:bg-amber-500  active:bg-amber-600 text-white">See More</a>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default TransformationSection