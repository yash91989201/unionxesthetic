import Image from "next/image"

const AboutMe = () => {
  return (
    <section className="px-6 sm:px-12">
      <div className="max-w-6xl mx-auto py-16 sm:py-20 space-y-12 sm:space-y-20">
        <h2 className="text-[clamp(24px,8vw,56px)] font-bold text-center italic">About Me</h2>
        <div className="flex flex-col lg:flex-row justify-evenly items-center space-y-8">
          <div className="relative max-w-sm w-80  sm:w-full md:w-2/5  h-[400px] sm:h-[480px] ">
            <Image
              src="/assets/images/aboutme_img.jpg"
              alt="about me img"
              layout="fill"
            />
          </div>
          <div className=" max-w-xl md:px-8  flex flex-col space-y-4 md:space-y-6 ">
            <h3 className="text-[clamp(24px,8vw,56px)] font-semibold italic text-amber-400">Hi, I am Amaan</h3>
            {/* paragraph text */}
            <p className=" text-[#666666] text-base font-medium leading-relaxed not-italic ">
              I am a certified fitness trainer , with my skills I have not only helped peoples to achieve a beautifully aesthetic body but also helped them to get into a fit lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section >
  )
}

export default AboutMe