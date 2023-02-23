import Link from "next/link";

const WelcomeSection = () => {
  return (
    <section className="px-6 sm:px-12 ">
      <div className="max-w-6xl py-16 mx-auto space-y-10 sm:py-20 sm:space-y-20">
        <h2 className="text-[clamp(24px,8vw,56px)] font-bold text-center italic">
          WELCOME TO <span className="text-amber-400">UNION XESTHETIC</span>
        </h2>
        <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0">
          {/* video board */}
          <div className="flex flex-col w-full space-y-4 md:w-1/2">
            <iframe
              className="w-full aspect-video"
              src="https://youtube.com/embed/qZY0d1-Qzpc"
              allow="encrypted-media"
            />
          </div>
          <div className="flex flex-col w-full px-0 space-y-6 md:px-6 md:w-1/2">
            <h3 className="text-[clamp(24px,6vw,40px)]  font-semibold italic text-amber-400">
              Online Fitness Training
            </h3>
            {/* paragraph text */}
            <p className="text-base not-italic font-medium leading-relaxed text-gray-700 ">
              Union Xesthetic Fitness training program provides personalized
              fitness plan for muscle building and fat loss. This is most
              comprehensive program and trains you for complete health, fitness
              and performance. Your improvement will happen in all components of
              physical fitness. You will not only be able to do daily tasks
              efficiently, but also take part in competitive sports.
            </p>
            {/* join link */}
            <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+your+fitness+training+program+.+What+kind+of+fitness+plans+do+you+offer+%3F">
              <a
                target="_blank"
                className="self-start px-4 py-2 text-sm font-semibold text-white rounded-full md:px-6 lg:text-lg bg-amber-400 hover:bg-amber-500 active:bg-amber-600"
              >
                Join Today
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
