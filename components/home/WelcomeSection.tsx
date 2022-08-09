import { useEffect, useState } from 'react'
import Link from "next/link"
import { WelcomeVideoType } from '../../types';

const WelcomeSection = () => {
    const [allVideo, setAllVideo] = useState<WelcomeVideoType[]>()
    useEffect(() => {
        fetch("/api/fetchWelcomeVideo")
            .then(res => res.json())
            .then(data => { setAllVideo(data) })
            .catch(err => { console.log(err) })
    }, [])

    return (
        <section className="px-6 sm:px-12 ">
            <div className="max-w-6xl mx-auto py-16 sm:py-20 space-y-8 sm:space-y-20">
                <h2 className="text-[clamp(24px,8vw,56px)] font-bold text-center italic">WELCOME TO <span className="text-amber-400">UNION XESTHETICS</span></h2>
                <div className="flex flex-col md:flex-row items-center space-y-8">
                    {/* video board */}
                    <div className="w-full md:w-1/2 flex flex-col space-y-4">
                        <iframe
                            className="w-full aspect-video"
                            src="https://youtube.com/embed/qZY0d1-Qzpc"
                            allow="encrypted-media"
                        >
                        </iframe>
                    </div>
                    <div className="p-0 md:p-12 w-full md:w-1/2  flex flex-col space-y-4 md:space-y-6">
                        <h3 className="text-[clamp(24px,6vw,40px)]  font-semibold italic text-amber-400">ONLINE FITNESS TRAINING</h3>
                        {/* paragraph text */}
                        <p className=" text-gray-700 text-base font-medium leading-relaxed not-italic ">
                            Union Xesthetic Fitness training program provides personalized fitness plan for muscle building and fat loss. This is most comprehensive program and trains you for complete health, fitness and performance. Your improvement will happen in all components of physical fitness. You will not only be able to do daily tasks efficiently, but also take part in competitive sports.
                        </p>
                        {/* join link */}
                        <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+your+fitness+training+program+.+What+kind+of+fitness+plans+do+you+offer+%3F">
                            <a target="_blank" className="self-start py-2 px-4 md:px-6 rounded-full text-sm lg:text-lg font-semibold bg-amber-400 hover:bg-amber-500  active:bg-amber-600 text-white">
                                Join Today
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default WelcomeSection