import Image from "next/image"


const AboutMe = () => {
  return (
    <section className="px-6 sm:px-12">
      <div className="max-w-6xl mx-auto py-16 sm:py-20 space-y-8 sm:space-y-20">
        <h2 className="text-[clamp(16px,6vw,48px)] font-bold text-center italic">About Me</h2>
        <div className="flex flex-col md:flex-row justify-evenly items-center space-y-8">
          <div className="relative max-w-sm  w-full  md:w-1/2 h-[480px] flex flex-col  space-y-4">
            <Image
              src="/assets/images/aboutme_img.jpg"
              alt="about me img"
              layout="fill"
            />
          </div>
          <div className=" w-full md:w-1/2  flex flex-col space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-4xl  font-semibold italic text-amber-400">Hi, I am Amaan</h3>
            {/* paragraph text */}
            <p className=" text-[#666666] text-base font-medium leading-relaxed not-italic ">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.he coast of the Semantics, a large language ocean.
            </p>

          </div>
        </div>
      </div>
    </section >
  )
}

export default AboutMe