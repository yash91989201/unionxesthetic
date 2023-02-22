import { useEffect, useState } from "react";
import Link from "next/link";

const ReviewSection = () => {
  const [allReviews, setAllReviews] = useState<ClientReviewType[]>();
  useEffect(() => {
    fetch("/api/fetchReviews")
      .then(res => res.json())
      .then(data => setAllReviews(data))
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <section className="px-6 bg-gray-600 sm:px-12">
      <div className="max-w-6xl py-16 mx-auto space-y-10 sm:py-20 sm:space-y-20 ">
        <p className="text-[clamp(24px,8vw,56px)] font-bold text-center italic text-amber-400">
          Client Reviews
        </p>
        {/* review card */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-12 place-items-center sm:place-items-start">
          {allReviews?.slice(0, 3).map(review => (
            <iframe
              key={review._id}
              className="w-full max-w-xs aspect-square"
              src={review.reviewVideoURL}
              allow="encrypted-media"
            ></iframe>
          ))}
        </div>
        <div className="flex justify-center max-w-6xl mx-auto ">
          <Link href="/reviews">
            <a className="px-4 py-2 text-sm font-semibold text-white rounded-full md:px-6 lg:text-lg bg-amber-400 hover:bg-amber-500 active:bg-amber-600">
              More Reviews
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
