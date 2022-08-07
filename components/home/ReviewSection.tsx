import { useEffect, useState } from "react"
import { ClientReviewType } from "../../types"
import Link from "next/link"

const ReviewSection = () => {
    const [allReviews, setAllReviews] = useState<ClientReviewType[]>()
    useEffect(() => {
        fetch("/api/fetchReviews")
            .then(res => res.json())
            .then(data => setAllReviews(data))
            .catch(err => { console.log(err) })
    }, [])
    return (
        <section className="px-6 sm:px-12">
            <div className="max-w-6xl mx-auto py-8 sm:py-16 space-y-8 sm:space-y-20 ">
                <p className="text-[clamp(16px,6vw,48px)] font-bold text-center italic text-amber-400">Client Reviews</p>
                {/* review card */}
                <div className="
                                mx-auto w-full max-w-6xl
                                flex flex-col flex-rap md:flex-row items-center
                                space-x-0 md:space-x-8 space-y-8 md:space-y-0
                            ">
                    {
                        allReviews?.slice(0, 3).map(review => <iframe key={review._id}
                            className="w-full aspect-square"
                            src={review.reviewVideoURL}
                            allow="encrypted-media"
                        >
                        </iframe>)
                    }
                </div>
                <div className="max-w-6xl mx-auto flex justify-center ">
                    <Link href="/reviews">
                        <a className="py-3 px-6 rounded-full  text-md md:text-xl text-white font-semibold bg-amber-400 text-center hover:bg-amber-500 active:bg-amber-600 ">More Reviews</a>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default ReviewSection