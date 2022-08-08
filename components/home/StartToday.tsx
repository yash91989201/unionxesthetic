import Link from "next/link"
import Image from "next/image"

const StartToday = () => {
    return (
        <section className="px-6 sm:px-12 bg-gray-600">
            <div className="max-w-6xl mx-auto py-16 sm:py-20 space-y-8 sm:space-y-20 ">
                <p className="text-[clamp(16px,6vw,48px)] font-bold text-center italic text-amber-400">Start Training Today</p>
                {/* testimony card */}
                <div className="flex flex-col md:flex-row md:justify-evenly text-xl text-white space-y-8 md:space-y-0">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <p>Online Training</p>
                        <div className="relative w-28 h-28">
                            <Image src="/assets/images/onlineTraining.png" alt="onlineTraining" layout="fill" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <p>Regular Check-Ins</p>
                        <div className="relative w-28 h-28">
                            <Image src="/assets/images/regularCheckins.png" alt="regularCheckins" layout="fill" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <p>Tasty Diet Plans</p>
                        <div className="relative w-28 h-28">
                            <Image src="/assets/images/tastyDietPlans.png" alt="tastyDietPlans" layout="fill" />
                        </div>
                    </div>
                </div>
                {/* whatsapp link */}
                <div className="flex justify-center">
                    <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+your+fitness+plan+and+would+like+to+enroll.">
                        <a target="_blank" className="px-4 py-2  rounded-full bg-amber-400  hover:bg-amber-500 active:bg-amber-600 text-sm sm:text-lg text-center font-semibold text-white">Join Today</a>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default StartToday