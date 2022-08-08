import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "../../sanity"
import { PostType } from "../../types"

const BlogPreviewSection = () => {
    const [allPosts, setAllPosts] = useState<PostType[]>()
    useEffect(() => {
        fetch("/api/fetchPosts")
            .then((res) => res.json())
            .then((data) => setAllPosts(data))
            .catch(() => { })
    }, [])
    return (
        <section className="px-6 sm:px-12 ">
            <div className="max-w-6xl mx-auto py-16 sm:py-20 space-y-8 sm:space-y-20">
                <h4 className="text-[clamp(16px,6vw,48px)] font-bold text-center italic">RECENT BLOGS</h4>
                <div className="
                    mx-auto  md:w-full 
                    flex flex-col md:flex-row justify-between items-center md:items-start
                    space-x-0 md:space-x-8 lg:space-x-12
                    space-y-8 sm:space-y-16 md:space-y-0 
              ">
                    {
                        allPosts?.slice(0, 3).map(post => (
                            <Link key={post._id} href={`/blog/${post.slug.current}`}>
                                <div className="rounded-md max-w-sm  w-full overflow-hidden group cursor-pointer">
                                    <div
                                        className='relative w-full aspect-video object-cover  group-hover:scale-105 transition-transform duration-200 ease-in-out'>
                                        <Image
                                            src={urlFor(post.mainImage).url()!}
                                            alt="post image"
                                            layout="fill"
                                        />
                                    </div>
                                    <div className='flex flex-col  justify-between p-4 sm:p-6 bg-gray-600'>
                                        <p className='text-md sm:text-lg font-bold text-white '>{post.title}</p>
                                        <p className="text-sm sm:text-md text-white space-y-60">{post.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div >
                <div className="max-w-6xl mx-auto flex justify-center ">
                    <Link href="/blog">
                        <a className="py-3 px-6 rounded-full  text-md md:text-xl text-white font-semibold bg-amber-400 text-center hover:bg-amber-500 active:bg-amber-600 ">Visit our blog page</a>
                    </Link>
                </div>
            </div>
        </section >
    )
}

export default BlogPreviewSection
