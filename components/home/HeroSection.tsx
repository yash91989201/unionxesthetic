import Link from "next/link"
import Image from "next/image";
// react icons
import { AiOutlineArrowRight } from "react-icons/ai"

const HeroSection = () => {
    return <>
        <section className="relative flex flex-col" >
            {/* value proposition */}
            <div className="absolute z-10 w-full h-full flex justify-center items-center  text-white bg-black/50">
                <div className="text-center space-y-4 md:space-y-8">
                    <div className="flex flex-col items-center space-y-3 md:space-y-6">
                        <h1 className="max-w-4xl text-[clamp(16px,6vw,48px)] text-amber-400 font-bold italic">Don&apos;t wish for a good body, work for it.</h1>
                        <h2 className="max-w-lg text-md text-center text-gray-200 md:text-xl italic">At union aesthetic we help you to acheieve the shape that you always dreamed of</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row md:flex justify-center items-center  space-y-2 lg:space-y-0 sm:space-y-4 md:space-x-6 text-sm md:text-md">
                        <Link href="https://wa.me/6370106392?text=Hi+%2C+I+am+interested+in+your+fitness+plan+and+would+like+to+enroll." >
                            <a target="_blank" className="p-1 px-4 md:p-2 md:px-8 rounded-full font-semibold bg-amber-400 hover:bg-amber-500  text-white">Join Now</a>
                        </Link>
                        <Link href="/reviews">
                            <a className="p-1 px-4 md:p-2 md:px-6 flex justify-center items-center md:space-x-2 hover:underline ">
                                <span>See Reviews</span>
                                <AiOutlineArrowRight />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-[50vh] sm:h-[65vh]  md:h-[75vh]  lg:h-[680px]">
                <Image
                    src="/assets/images/dummy_img.jpg"
                    alt="dummy img"
                    layout="fill"
                />
            </div>
        </section>
    </>
}

export default HeroSection