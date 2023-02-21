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
                    <div className="px-4 flex flex-col items-center space-y-3 md:space-y-6">
                        <h1 className="max-w-sm md:max-w-2xl lg:max-w-3xl text-[clamp(16px,6vw,40px)] text-amber-400 font-bold italic">Don&apos;t wish for a good body, work for it.</h1>
                        <h2 className="max-w-xs lg:max-w-2xl  text-sm md:text-md lg:text-lg text-center text-gray-200  italic leading-snug">At union aesthetic we help you to acheieve the shape that you always dreamed of.</h2>
                    </div>
                    <div className=" hidden xs:flex flex-col lg:flex-row md:flex justify-center items-center  space-y-2 lg:space-y-0 sm:space-y-4 md:space-x-6 ">
                        <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+your+fitness+training+program+.+What+kind+of+fitness+plans+do+you+offer+%3F" >
                            <a target="_blank" className="py-2 px-4 md:px-6 rounded-full text-sm lg:text-lg font-semibold bg-amber-400 hover:bg-amber-500  active:bg-amber-600 text-white">Join Today</a>
                        </Link>
                        <Link href="/reviews">
                            <a className="py-2 px-4 md:px-6 flex justify-center items-center text-sm lg:text-lg md:space-x-2 hover:underline ">
                                <span>See Reviews</span>
                                <AiOutlineArrowRight />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative w-full h-[40vh] sm:h-auto sm:aspect-video">
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