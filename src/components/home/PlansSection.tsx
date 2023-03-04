import Link from "next/link";

const PlansSection = () => {
  return (
    <section className="px-6 sm:px-12">
      <div className="max-w-6xl py-16 mx-auto space-y-10 sm:py-20 sm:space-y-20">
        <div className="space-y-6">
          <h4 className="text-[clamp(24px,8vw,56px)] font-bold text-center italic text-body-col">
            FITNESS PLANS
          </h4>
          <h2 className="italic font-semibold text-center text-md sm:text-xl">
            Let us help you achieve your goal with a solid workout plan.
          </h2>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-12 place-items-center">
          {/* single card */}
          <div className="flex flex-col w-full space-y-6 overflow-hidden bg-body-col rounded-lg place-self-start">
            {/* section 1 */}
            <h2 className="p-4 text-lg font-semibold text-center text-white  sm:text-xl bg-emerald-500">
              4 WEEK PLAN
            </h2>
            {/* section 2 - plan details */}
            <ul className="pl-8 space-y-2 text-sm text-white list-disc sm:text-lg">
              <li>Customized diet/fitness plan</li>
              <li>Home/Gym Workout</li>
              <li>Supplement Guidance</li>
              <li>Weekly Check ins</li>
              <li>Whastapp Access</li>
            </ul>
            {/* section 3 */}
            <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+the+4+week+plan.+How+can+I+enroll+for+it+%3F">
              <a className="w-full p-4 text-lg font-semibold text-center text-white bg-amber-400 sm:text-xl">
                JOIN @ &#8377;999
              </a>
            </Link>
          </div>
          {/* single card */}
          <div className="flex flex-col w-full space-y-6 overflow-hidden bg-body-col rounded-lg place-self-start">
            {/* section 1 */}
            <h2 className="w-full p-4 text-lg font-semibold text-center text-white sm:text-xl bg-emerald-500">
              8 WEEK PLAN
            </h2>
            {/* section 2 - plan details */}
            <ul className="pl-8 space-y-2 text-sm text-white list-disc sm:text-lg">
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
              <a className="w-full p-4 text-lg font-semibold text-center text-white bg-amber-400 sm:text-xl">
                JOIN @ &#8377;1499
              </a>
            </Link>
          </div>
          {/* single card */}
          <div className="flex flex-col w-full space-y-6 overflow-hidden bg-body-col rounded-lg place-self-start">
            {/* section 1 */}
            <h2 className="w-full p-4 text-lg font-semibold text-center text-white sm:text-xl bg-emerald-500">
              12 WEEK PLAN
            </h2>
            {/* section 2 - plan details */}
            <ul className="pl-8 space-y-2 text-sm text-white list-disc sm:text-lg">
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
              <a className="w-full p-4 text-lg font-semibold text-center text-white bg-amber-400 t sm:text-xl">
                JOIN @ &#8377;1999
              </a>
            </Link>
          </div>
        </div>
        {/* whatsapp link */}
        <div className="flex justify-center">
          <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+your+fitness+training+program+.+How+can+I+enroll+in+this+program+%3F">
            <a
              target="_blank"
              className="px-4 py-2 text-sm font-semibold text-white rounded-full md:px-6 lg:text-lg bg-amber-400 hover:bg-amber-500 active:bg-amber-600"
            >
              ENROLL NOW
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
