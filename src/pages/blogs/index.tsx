import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { sanityClient, urlFor } from "config/sanity";
import { GetServerSideProps } from "next";

interface PageProps {
  allPosts: PostType[];
}

const index = ({ allPosts }: PageProps) => {
  return (
    <>
      <NextSeo
        title="Union Xesthetic - Blogs"
        description="Get all the information related to fitness in one place."
      />
      {/* <HeroSection /> */}
      <section className="px-6 sm:px-12">
        <div className="py-8 space-y-8 sm:py-16 sm:space-y-20">
          <h1 className="text-[clamp(24px,8vw,56px)] font-bold text-center italic text-amber-400">
            Blogs
          </h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))]  sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-12 place-items-start">
            {allPosts.length == 0 ? (
              <p>
                No blog posts to show <br /> visit later.
              </p>
            ) : (
              allPosts.map((post) => (
                <Link key={post._id} href={`/blogs/${post.slug.current}`}>
                  <div className="w-full max-w-sm mx-auto overflow-hidden border-2 cursor-pointer md:mx-0 rounded-xl group">
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
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

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
  const allPosts = await sanityClient.fetch(query);
  return {
    props: {
      allPosts,
    },
  };
};
