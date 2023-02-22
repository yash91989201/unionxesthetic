import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "config/sanity";

const BlogPreviewSection = () => {
  const [allPosts, setAllPosts] = useState<PostType[]>();
  useEffect(() => {
    fetch("/api/fetchPosts")
      .then(res => res.json())
      .then(data => setAllPosts(data))
      .catch(() => {});
  }, []);
  return (
    <section className="px-6 sm:px-12 ">
      <div className="max-w-6xl py-16 mx-auto space-y-10 sm:py-20 sm:space-y-20">
        <h4 className="text-[clamp(24px,8vw,56px)] font-bold text-center italic">
          RECENT BLOGS
        </h4>
        <div className="flex flex-col items-center justify-between mx-auto space-x-0 space-y-12 md:w-full md:flex-row md:items-start md:justify-start md:space-x-8 lg:space-x-12 sm:space-y-16 md:space-y-0">
          {allPosts?.slice(0, 3).map(post => (
            <Link key={post._id} href={`/blogs/${post.slug.current}`}>
              <div className="w-full max-w-sm overflow-hidden border rounded-md cursor-pointer group">
                <div className="relative object-cover w-full transition-transform duration-200 ease-in-out aspect-video group-hover:scale-105">
                  <Image
                    src={urlFor(post.mainImage).url()!}
                    alt="post image"
                    layout="fill"
                  />
                </div>
                <div className="flex flex-col p-4 bg-gray-50">
                  <p className="py-3 font-bold text-md sm:text-xl">
                    {post.title}
                  </p>
                  <p className="text-sm text-gray-600 sm:text-md">
                    {post.description.slice(0, 150)}...{" "}
                    <span className="font-bold">READ MORE</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center max-w-6xl mx-auto ">
          <Link href="/blogs">
            <a className="px-4 py-2 text-sm font-semibold text-white rounded-full md:px-6 lg:text-lg bg-amber-400 hover:bg-amber-500 active:bg-amber-600">
              Visit our blog page
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
