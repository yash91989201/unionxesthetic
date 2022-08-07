import { GetServerSideProps } from "next";
import { sanityClient, urlFor } from "../../sanity"
import { PostType } from "../../types";
import Link from "next/link"
import Image from "next/image"

interface PageProps {
    allPosts: PostType[]
}

const index = ({ allPosts }: PageProps) => {
    return (
        <>
            {/* <HeroSection /> */}
            <section
                className='
                            p-2 grid grid-cols-1 gap-3 
                            sm:grid-cols-2 
                            lg:grid-cols-3 
                            md:gap-6 md:p-6
                        '>
                {
                    allPosts.length == 0 ?
                        <p>No blog posts to show <br /> visit later.</p> :
                        allPosts.map(post => (
                            <Link key={post._id} href={`/blog/${post.slug.current}`}>
                                <div className='border-2 rounded-xl  overflow-hidden group cursor-pointer'>
                                    <div
                                        className='relative
                                w-full h-60 object-cover 
                                group-hover:scale-105
                                transition-transform duration-200 ease-in-out
                            '
                                    >
                                        <Image
                                            src={urlFor(post.mainImage).url()!}
                                            alt="post image"
                                            layout="fill"
                                        />
                                    </div>
                                    <div className='flex items-center justify-between p-4 bg-white'>
                                        <div>
                                            <p className='text-lg font-bold'>{post.title}</p>
                                            <p>{post.description} </p>
                                            <p>by {post.author.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                }
            </section >
        </>
    )
}

export default index;

export const getServerSideProps: GetServerSideProps = async () => {
    const query = `
    *[_type == "post"]{
        _id,
        title,
        author ->{
          name,
          image
         },
         description,
         mainImage,
         slug
        }
        `;
    const allPosts = await sanityClient.fetch(query)
    return {
        props: {
            allPosts
        }
    }
}