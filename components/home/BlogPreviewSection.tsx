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
            <div className="max-w-6xl mx-auto py-16 sm:py-20 space-y-10 sm:space-y-20">
                <h4 className="text-[clamp(24px,8vw,56px)] font-bold text-center italic">RECENT BLOGS</h4>
                <div className="
                    mx-auto  md:w-full 
                    flex flex-col md:flex-row justify-between items-center md:items-start md:justify-start
                    space-x-0 md:space-x-8 lg:space-x-12
                    space-y-12 sm:space-y-16 md:space-y-0 
              ">
                    {
                        allPosts?.slice(0, 3).map(post => (
                            <Link key={post._id} href={`/blogs/${post.slug.current}`}>
                                <div className="rounded-md max-w-sm  w-full overflow-hidden group cursor-pointer border">
                                    <div
                                        className='relative w-full aspect-video object-cover  group-hover:scale-105 transition-transform duration-200 ease-in-out'>
                                        <Image
                                            src={urlFor(post.mainImage).url()!}
                                            alt="post image"
                                            layout="fill"
                                        />
                                    </div>
                                    <div className="flex flex-col  p-4 bg-gray-50">
                                        <p className="text-md sm:text-xl py-3 font-bold">{post.title}</p>
                                        <p className="text-sm sm:text-md text-gray-600">{post.description.slice(0, 150)}... <span className="font-bold">READ MORE</span></p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div >
                <div className="max-w-6xl mx-auto flex justify-center ">
                    <Link href="/blogs">
                        <a className="py-2 px-4 md:px-6 rounded-full text-sm lg:text-lg font-semibold bg-amber-400 hover:bg-amber-500  active:bg-amber-600 text-white">Visit our blog page</a>
                    </Link>
                </div>
            </div>
        </section >
    )
}

export default BlogPreviewSection
