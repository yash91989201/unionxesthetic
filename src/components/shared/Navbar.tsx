import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const activeLink = (link: string) => {
    return router.asPath === link
      ? "text-accent-300 font-semibold underline underline-offset-4 "
      : "";
  };

  return (
    <header className="bg-body-col">
      <div className="relative flex items-center justify-between max-w-6xl px-3 py-2 mx-auto md:px-0">
        {/* logo */}
        <Link href="/">
          <div className="flex items-center justify-center space-x-2">
            <div className="relative cursor-pointer w-9 h-9 md:w-10 md:h-10">
              <Image src="/assets/images/logo.png" alt="" layout="fill" />
            </div>
            <p className="font-medium md:hidden">Xesthetics</p>
          </div>
        </Link>
        {/* navigation menu */}
        <nav className="items-center hidden space-x-4 md:flex ">
          <ul className="flex space-x-2 text-sm text-white lg:space-x-2">
            <li>
              <Link href="/">
                <a className={`py-1.5 px-3 ${activeLink("/")}`}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/plans">
                <a className={`py-1.5 px-3  ${activeLink("/plans")} `}>Plans</a>
              </Link>
            </li>
            <li>
              <Link href="/reviews">
                <a className={`py-1.5 px-3 ${activeLink("/reviews")} `}>
                  Reviews
                </a>
              </Link>
            </li>

            <li>
              <Link href="/transformations">
                <a className={`py-1.5 px-3 ${activeLink("/transformations")} `}>
                  Transformations
                </a>
              </Link>
            </li>
            <li>
              <Link href="/testimonials">
                <a className={`py-1.5 px-3 ${activeLink("/testimonials")} `}>
                  Testimonials
                </a>
              </Link>
            </li>
          </ul>
          {/* primary cta */}
          <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+your+fitness+training+program+.+What+kind+of+fitness+plans+do+you+offer+%3F">
            <a
              target="_blank"
              className="hidden py-1 text-base font-medium text-white rounded lg:block md:px-4 lg:text-base bg-amber-400 hover:bg-amber-500 active:bg-amber-600"
            >
              Join Now
            </a>
          </Link>
        </nav>
        {/* menu button */}
        <button
          className="block md:hidden py-1.5 px-3  rounded-md  text-gray-700 text-xl  active:bg-transparent "
          onClick={() => setMenu(!menu)}
        >
          {menu ? <CgClose /> : <FiMenu />}
        </button>
        {/* mobile navigation */}
        <div
          className={`absolute z-[99] top-12 left-0 block  md:hidden w-full ${
            menu ? "scale-y-100" : "scale-y-0"
          } origin-top  transition-all`}
        >
          <nav className="flex flex-col p-3 py-6 space-y-3 text-white bg-gray-600">
            <Link href="/">
              <a
                className={`block p-2 ${activeLink("/")}`}
                onClick={() => setMenu(false)}
              >
                Home
              </a>
            </Link>
            <Link href="/plans">
              <a
                className={`block p-2 ${activeLink("/plans")}`}
                onClick={() => setMenu(false)}
              >
                Plans
              </a>
            </Link>
            <Link href="/blogs">
              <a
                className={`block p-2 ${activeLink("/blog")}`}
                onClick={() => setMenu(false)}
              >
                Blogs
              </a>
            </Link>
            <Link href="/reviews">
              <a
                className={`block p-2 ${activeLink("/reviews")}`}
                onClick={() => setMenu(false)}
              >
                Reviews
              </a>
            </Link>
            <Link href="/transformations">
              <a
                className={`block p-2 ${activeLink("/transformations")}`}
                onClick={() => setMenu(false)}
              >
                Transformations
              </a>
            </Link>
            <Link href="/testimonials">
              <a
                className={`block p-2 ${activeLink("/testimonials")}`}
                onClick={() => setMenu(false)}
              >
                Testimonials
              </a>
            </Link>
            <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+your+fitness+training+program+.+What+kind+of+fitness+plans+do+you+offer+%3F">
              <a className="px-4 py-2 text-sm font-semibold text-white rounded-full w-fit lg:text-lg bg-amber-400 hover:bg-amber-500 active:bg-amber-600">
                Join Today
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
