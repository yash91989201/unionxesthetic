import Link from "next/link";
import Image from "next/image";
// react icons
import { AiOutlineArrowRight } from "react-icons/ai";

const HeroSection = () => {
  return (
    <>
      <section className="relative flex flex-col">
        {/* value proposition */}
        <div className="absolute z-10 flex items-center justify-center w-full h-full text-white bg-black/50">
          <div className="space-y-4 text-center md:space-y-8">
            <div className="flex flex-col items-center px-4 space-y-3 md:space-y-6">
              <h1 className="max-w-sm md:max-w-2xl lg:max-w-3xl text-[clamp(16px,6vw,40px)] text-amber-400 font-bold italic">
                Don&apos;t wish for a good body, work for it.
              </h1>
              <h2 className="max-w-xs text-sm italic leading-snug text-center text-gray-200 lg:max-w-2xl md:text-md lg:text-lg">
                At union aesthetic we help you to acheieve the shape that you
                always dreamed of.
              </h2>
            </div>
            <div className="flex-col items-center justify-center hidden space-y-2 xs:flex lg:flex-row md:flex lg:space-y-0 sm:space-y-4 md:space-x-6">
              <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+your+fitness+training+program+.+What+kind+of+fitness+plans+do+you+offer+%3F">
                <a
                  target="_blank"
                  className="px-4 py-2 text-sm font-semibold text-white rounded-full md:px-6 lg:text-lg bg-amber-400 hover:bg-amber-500 active:bg-amber-600"
                >
                  Join Today
                </a>
              </Link>
              <Link href="/reviews">
                <a className="flex items-center justify-center px-4 py-2 text-sm md:px-6 lg:text-lg md:space-x-2 hover:underline ">
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
  );
};

export default HeroSection;
