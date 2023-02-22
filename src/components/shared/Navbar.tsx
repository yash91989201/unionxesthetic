import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const activeLink = (link: string) => {
    return router.asPath === link
      ? "text-amber-400 font-semibold underline underline-offset-4 "
      : "";
  };

  return (
    <header className="">
      <div className="relative flex items-center justify-between max-w-6xl px-6 mx-auto sm:px-12">
        {/* logo */}
        <div className="flex-1 py-3 md:flex-grow-0 md:flex-shrink-0">
          <Link href="/">
            <div className="relative w-12 cursor-pointer md:w-16 aspect-square">
              <Image src="/assets/images/logo.png" alt="" layout="fill" />
            </div>
          </Link>
        </div>
        {/* navigation menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-2 text-black lg:space-x-4">
            <li>
              <Link href="/">
                <a
                  className={`py-1.5 px-3 ${activeLink(
                    "/"
                  )} hover:underline hover:underline-offset-4`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/plans">
                <a
                  className={`py-1.5 px-3  ${activeLink(
                    "/plans"
                  )} hover:underline hover:underline-offset-4`}
                >
                  Plans
                </a>
              </Link>
            </li>
            <li>
              <Link href="/reviews">
                <a
                  className={`py-1.5 px-3 ${activeLink(
                    "/reviews"
                  )} hover:underline hover:underline-offset-4`}
                >
                  Reviews
                </a>
              </Link>
            </li>

            <li>
              <Link href="/transformations">
                <a
                  className={`py-1.5 px-3 ${activeLink(
                    "/transformations"
                  )} hover:underline hover:underline-offset-4`}
                >
                  Transformations
                </a>
              </Link>
            </li>
            <li>
              <Link href="/testimonials">
                <a
                  className={`py-1.5 px-3 ${activeLink(
                    "/testimonials"
                  )} hover:underline hover:underline-offset-4`}
                >
                  {" "}
                  Testimonials
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* primary cta */}
        <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+your+fitness+training+program+.+What+kind+of+fitness+plans+do+you+offer+%3F">
          <a
            target="_blank"
            className="hidden py-2 text-sm font-semibold text-white rounded-full lg:block md:px-6 lg:text-lg bg-amber-400 hover:bg-amber-500 active:bg-amber-600"
          >
            Join Today
          </a>
        </Link>
        {/* menu button */}
        <button
          className="block md:hidden py-1.5 px-3  rounded-md border-gray-700 border text-gray-700"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <CloseIcon /> : <MenuIcon />}
        </button>
        {/* mobile navigation */}
        <div
          className={`absolute z-[99] top-[4.525rem] left-0 block  md:hidden w-full ${
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

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
  </svg>
);
