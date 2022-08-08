import { useState } from "react";
import { NextSeo } from "next-seo";
import { GetStaticPaths, GetStaticProps } from "next"
import { sanityClient, urlFor } from "../../sanity"
import Image from "next/image"

import { PostType } from "../../types"
import PortableText from "react-portable-text"

import { useForm, SubmitHandler } from "react-hook-form";
import BlogPreviewSection from "../../components/home/BlogPreviewSection";


interface PageProps {
    post: PostType
}

interface FormProps {
    _id: string;
    name: string;
    email: string;
    comment: string;
}

const Post = ({ post }: PageProps) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>();
    const onSubmit: SubmitHandler<FormProps> = async (data) => {
        fetch("/api/createComment", {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(() => setFormSubmitted(true))
            .catch(err => console.log(err.type))
    }
    return (
        <>
            <NextSeo
                title={post.title}
                description=""
            />
            <main>
                <div className="max-w-4xl mx-auto px-6 lg:px-0 space-y-8">
                    <div className="">
                        <h1 className="text-2xl md:text-3xl my-4">{post.title}</h1>
                        <h2 className=" text-lg font-medium text-gray-500">{post.description}</h2>
                    </div>
                    <div className="flex items-center">
                        <div className="relative w-8 h-8 rounded-full">
                            <Image src={urlFor(post.author.image).url()!} alt="" layout="fill" />
                        </div>
                        <h3 className="px-4 text-gray-400">By {post.author.name}</h3>
                    </div>
                    <div className="relative aspect-video rounded-md overflow-hidden  ">
                        <Image src={urlFor(post.mainImage.asset._ref).url()!} alt="" layout="fill" />
                    </div>
                </div>
                <article className="max-w-4xl mx-auto px-6 lg:px-0">
                    <div className="my-8 leading-relaxed">
                        <PortableText
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                            content={post.body}
                            serializers={{
                                h1: (props: any) => (
                                    <h1 className="text-2xl font-bold my-5" {...props} />
                                ),
                                h2: (props: any) => (
                                    <h2 className="text-xl font-bold my-5" {...props} />
                                ),
                                li: ({ children }: any) => (
                                    <li className="ml-4 list-disc" >{children}</li>
                                ),
                                link: ({ href, children }: any) => (
                                    <a href={href} className="text-blue-500 hover:underline" >{children}</a>
                                ),
                            }}
                        />
                    </div>

                </article>
                <hr className="max-w-4xl my-5 mx-auto border-amber-400 border-2" />
                {/* comments */}
                <div className="max-w-4xl mx-auto p-12 m-12 shadow-amber-400 shadow">
                    <h3 className="text-4xl" >Comments</h3>
                    <hr className="my-6" />
                    {
                        post.comments.length == 0 ? <p className="font-semibold text-gray-400">No comments to show</p> : post.comments.map((comment) => (
                            <div
                                key={comment._id}
                                className="bg-gray-100 p-6 my-2 rounded-md flex flex-col "
                            >
                                <div className="flex space-x-3">
                                    <p className="font-semibold text-amber-400">{comment.name}</p>
                                    <p className="text-medium text-gray-400">{comment.email}</p>
                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        ))
                    }
                </div>
                {/* comment form */}
                {
                    formSubmitted ?
                        <div className="max-w-4xl p-8 mx-auto bg-amber-400 text-white" >
                            <h2 className="py-2 text-2xl font-bold">
                                Thank your for your awesome comment !!!
                            </h2>
                            <p>
                                Once your comment is approved it will show below
                            </p>
                        </div>
                        :
                        <form className="flex flex-col mb-10 p-5 mx-auto max-w-2xl" onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="text-sm text-amber-500">Enjoyed this article?</h3>
                            <h4 className="text-3xl font-bold">Leave a comment below</h4>
                            <hr className="py-3 mt-2" />
                            <input
                                {...register("_id")}
                                type="hidden"
                                name="_id"
                                value={post._id}
                            />
                            <label htmlFor="" className="mb-5 " >
                                <span className="text-gray-700" >Name</span>
                                <input
                                    {...register("name", { required: true })}
                                    className="shadow border rounded p-3 form-input mt-1 block w-full
                 focus:outline-none focus:ring-amber-400  focus:ring-1"   placeholder="Enter your name" type="text" />
                            </label>
                            <label htmlFor="" className="mb-5 " >
                                <span className="text-gray-700" >Email</span>
                                <input
                                    {...register("email", { required: true })}
                                    className="shadow border rounded p-3 form-input mt-1 block w-full 
                focus:outline-none focus:ring-amber-500 focus:ring-1"   placeholder="Enter your email" type="email" />
                            </label>
                            <label htmlFor="" className="mb-5 " >
                                <span className="text-gray-700" >Comment</span>
                                <textarea
                                    {...register("comment", { required: true })}
                                    className="shadow border rounded py-2 px-3 form-textarea  mt-1 block w-full
                 focus:outline-none focus:ring-amber-400 focus:ring-1"  placeholder="Enter your comment" rows={6} />
                            </label>
                            {/* erros will return when validation fails */}
                            <div className="flex flex-col py-5">
                                {errors.name && <p className="text-red-500"> - Name feild is required </p>}
                                {errors.email && <p className="text-red-500"> - Email feild is required </p>}
                                {errors.comment && <p className="text-red-500"> - Comment feild is required </p>}
                            </div>
                            <input
                                className="
            px-4 py-2 rounded
            bg-amber-500 
            hover:bg-amber-400 focus:shadow-outline 
            focus:outline-none text-white font-bold
            cursor-pointer
            "
                                type="submit" value="Submit"
                            />
                        </form>
                }
                <BlogPreviewSection />
            </main>
        </>
    )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {

    const query = `*[_type == "post"]{
            _id,
            slug {
                current
            }
        }`;
    const posts = await sanityClient.fetch(query);
    const paths = posts.map((post: PostType) => ({
        params: {
            slug: post.slug.current
        }
    }))
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `
    *[_type == "post" && slug.current == $slug] [0]{
        _id,
        _createdAt,
        title,
        author -> {
            name,
            image
        },
        'comments':*[_type == "comment" && post._ref == ^._id && approved == true],
            description,
            mainImage,
            slug,
            body
        
    }`;
    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    })
    console.log(post)
    if (!post) return { notFound: true }
    return {
        props: {
            post,
        },
        revalidate: 60
    }

}