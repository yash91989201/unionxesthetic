import Link from "next/link"

const PlansSection = () => {
    return (
        <section className="px-6 sm:px-12">
            <div className="max-w-6xl mx-auto py-16 sm:py-20 space-y-8 sm:space-y-20">
                <div className="space-y-4">
                    <h4 className="text-[clamp(24px,8vw,56px)] font-bold text-center italic">FITNESS PLANS</h4>
                    <h2 className="text-md sm:text-xl text-center  font-semibold text-white italic">Let us help you achieve your goal with a solid workout plan.</h2>
                </div>
                {/* cards section */}
                <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-12 place-items-center ">
                    {/* single card */}
                    <div className="w-full flex flex-col rounded-lg place-self-start  bg-gray-600 space-y-6 overflow-hidden">
                        {/* section 1 */}
                        <h2 className=" p-4 text-center text-lg sm:text-xl font-semibold text-white  bg-emerald-500">4 WEEK PLAN</h2>
                        {/* section 2 - plan details */}
                        <ul className="pl-8 text-sm sm:text-lg text-white space-y-2 list-disc">
                            <li>Customized diet/fitness plan</li>
                            <li>Home/Gym Workout</li>
                            <li>Supplement Guidance</li>
                            <li>Weekly Check ins</li>
                            <li>Whastapp Access</li>
                        </ul>
                        {/* section 3 */}
                        <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+the+4+week+plan.+How+can+I+enroll+for+it+%3F">
                            <a className="p-4 w-full bg-amber-400  text-lg sm:text-xl text-center text-white font-semibold">JOIN @ &#8377;799</a>
                        </Link>
                    </div>
                    {/* single card */}
                    <div className="w-full flex flex-col rounded-lg place-self-start  bg-gray-600 space-y-6 overflow-hidden">
                        {/* section 1 */}
                        <h2 className="w-full p-4 text-center  text-lg sm:text-xl font-semibold text-white  bg-emerald-500">8 WEEK PLAN</h2>
                        {/* section 2 - plan details */}
                        <ul className="pl-8 text-sm sm:text-lg text-white  space-y-2 list-disc">
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
                        <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+the+8+week+plan.+How+can+I+enroll+for+it+%3F">

                            <a className="p-4 w-full bg-amber-400  text-lg sm:text-xl text-center text-white font-semibold">JOIN @ &#8377;1299</a>
                        </Link>
                    </div>
                    {/* single card */}
                    <div className="w-full flex flex-col rounded-lg place-self-start  bg-gray-600 space-y-6 overflow-hidden">
                        {/* section 1 */}
                        <h2 className="w-full p-4 text-center  text-lg sm:text-xl font-semibold text-white bg-emerald-500">12 WEEK PLAN</h2>
                        {/* section 2 - plan details */}
                        <ul className="pl-8 text-sm sm:text-lg text-white  space-y-2 list-disc">
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
                        <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+the+12+week+plan.+How+can+I+enroll+for+it+%3F">

                            <a className="p-4 w-full bg-amber-400 t text-lg sm:text-xl text-center text-white font-semibold">JOIN @ &#8377;1499</a>
                        </Link>
                    </div>
                </div>
                {/* whatsapp link */}
                <div className="flex justify-center">
                    <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+your+fitness+training+program+.+How+can+I+enroll+in+this+program+%3F">
                        <a target="_blank" className="py-2 px-4 md:px-6 rounded-full text-sm lg:text-lg font-semibold bg-amber-400 hover:bg-amber-500  active:bg-amber-600 text-white">ENROLL NOW</a>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default PlansSection