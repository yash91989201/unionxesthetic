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
        <section className="px-6 sm:px-12 bg-gray-600">
            <div className="max-w-6xl mx-auto py-16 sm:py-20 space-y-10 sm:space-y-20 ">
                <p className="text-[clamp(24px,8vw,56px)] font-bold text-center italic text-amber-400">Client Reviews</p>
                {/* review card */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-12 place-items-center sm:place-items-start">
                    {
                        allReviews?.slice(0, 3).map(review => <iframe key={review._id}
                            className="max-w-xs w-full aspect-square"
                            src={review.reviewVideoURL}
                            allow="encrypted-media"
                        >
                        </iframe>)
                    }
                </div>
                <div className="max-w-6xl mx-auto flex justify-center ">
                    <Link href="/reviews">
                        <a className="py-2 px-4 md:px-6 rounded-full text-sm lg:text-lg  font-semibold bg-amber-400 hover:bg-amber-500  active:bg-amber-600 text-white">More Reviews</a>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default ReviewSection