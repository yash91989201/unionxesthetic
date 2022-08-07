import Link from "next/link"

const PlansSection = () => {
    return (
        <section id="fitnessPlans" className="px-6 sm:px-12 bg-gray-600 ">
            <div className="max-w-6xl mx-auto py-8  sm:py-16 space-y-8 sm:space-y-20">
                <div className="space-y-4">
                    <h4 className="text-[clamp(16px,6vw,48px)] font-bold text-center italic text-amber-400">FITNESS PLANS</h4>
                    <h2 className="text-md sm:text-xl text-center  font-semibold text-white italic">Let us help you achieve your goal with a solid workout plan.</h2>
                </div>
                {/* cards section */}
                <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-8 lg:space-y-0  lg:space-x-8">
                    {/* single card */}
                    <div className="w-full sm:w-3/4 md:w-2/4 lg:w-[28%] flex flex-col rounded-lg  bg-white space-y-6 overflow-hidden">
                        {/* section 1 */}
                        <h2 className="w-full p-4 text-center text-xl font-semibold text-white  bg-emerald-600">4 WEEK PLAN</h2>
                        {/* section 2 - plan details */}
                        <ul className="pl-8 text-md sm:text-lg text-gray-600  space-y-2 list-disc">
                            <li>Customized diet/fitness plan</li>
                            <li>Home/Gym Workout</li>
                            <li>Supplement Guidance</li>
                            <li>Weekly Check ins</li>
                            <li>Whastapp Access</li>
                        </ul>
                        {/* section 3 */}
                        <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+the+4+week+fitness+plan+.+What+is+the+process+to+enroll+%3F">
                            <a className="p-4 w-full bg-amber-400 text-xl text-center text-white font-semibold">JOIN @ &#8377;799</a>
                        </Link>
                    </div>
                    {/* single card */}
                    <div className="w-full sm:w-3/4 md:w-2/4 lg:w-[28%] flex flex-col rounded-lg  bg-white space-y-6 overflow-hidden">
                        {/* section 1 */}
                        <h2 className="w-full p-4 text-center text-xl font-semibold text-white  bg-emerald-600">8 WEEK PLAN</h2>
                        {/* section 2 - plan details */}
                        <ul className="pl-8 text-md sm:text-lg text-gray-600  space-y-2 list-disc">
                            <li>Customized diet/fitness plan</li>
                            <li>Home/Gym Workout</li>
                            <li>Supplement Guidance</li>
                            <li>Weekly Check ins</li>
                            <li>Whastapp Access</li>
                            <li>Yummy receipes</li>
                            <li>Customised meal planning</li>
                            <li>Personal Notes</li>
                        </ul>
                        {/* section 3 */}
                        <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+the+8+week+fitness+plan+.+What+is+the+process+to+enroll+%3F">

                            <a className="p-4 w-full bg-amber-400 text-xl text-center text-white font-semibold">JOIN @ &#8377;1299</a>
                        </Link>
                    </div>
                    {/* single card */}
                    <div className="w-full sm:w-3/4 md:w-2/4 lg:w-[28%] flex flex-col rounded-lg  bg-white space-y-6 overflow-hidden">
                        {/* section 1 */}
                        <h2 className="w-full p-4 text-center text-xl font-semibold text-white bg-emerald-600">12 WEEK PLAN</h2>
                        {/* section 2 - plan details */}
                        <ul className="pl-8 text-md sm:text-lg text-gray-600  space-y-2 list-disc">
                            <li>Customized diet/fitness plan</li>
                            <li>Home/Gym Workout</li>
                            <li>Supplement Guidance</li>
                            <li>Weekly Check ins</li>
                            <li>Whastapp Access</li>
                            <li>Yummy receipes</li>
                            <li>Customised meal planning</li>
                            <li>Personal Notes</li>
                            <li>Live Video Session (alternate week)</li>
                            <li>Personal Notes</li>
                        </ul>
                        {/* section 3 */}
                        <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+the+12+week+fitness+plan+.+What+is+the+process+to+enroll+%3F">

                            <a className="p-4 w-full bg-amber-400 text-xl text-center text-white font-semibold">JOIN @ &#8377;1499</a>
                        </Link>
                    </div>
                </div>
                {/* whatsapp link */}
                <div className="flex justify-center">
                    <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+your+fitness+plan+and+would+like+to+enroll.">
                        <a target="_blank" className="p-2 sm:p-4  rounded-full bg-amber-400  hover:bg-amber-500 active:bg-amber-600 text-sm sm:text-lg text-center font-semibold text-white">Contact on whatsapp to enroll   </a>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default PlansSection