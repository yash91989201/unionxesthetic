import { useEffect, useState } from "react"
import { TransformationType } from "../../types"
import { urlFor } from "../../sanity"
import Link from "next/link"
import Image from "next/image"

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
            <div className="max-w-6xl mx-auto py-16 sm:py-20 space-y-8 sm:space-y-20 ">
                <p className="text-[clamp(16px,6vw,48px)] font-bold text-center italic text-amber-400">Client Transformations</p>
                {/* testimony card */}
                <div className="
                                mx-auto w-full max-w-6xl
                                flex flex-col  md:flex-row justify-center items-center
                                space-x-0 md:space-x-8 space-y-8 md:space-y-0
                            ">
                    {
                        allTransformation?.slice(0, 3).map(transformation => <div key={transformation._id} className="relative w-64 aspect-square">
                            <Image
                                src={urlFor(transformation.clientTransformationImage).url()!}
                                alt={transformation.title}
                                layout="fill"
                            />
                        </div>)
                    }
                </div>
                <div className="max-w-6xl mx-auto flex justify-center ">
                    <Link href="/transformation">
                        <a className="py-1 px-4 md:py-2 md:px-6 rounded-full text-sm lg:text-lg  font-semibold bg-amber-400 hover:bg-amber-500  active:bg-amber-600 text-white">See More</a>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default TransformationSection