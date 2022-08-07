import { useState } from "react"
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter()
    const [menu, setMenu] = useState(false)
    const activeLink = (link: string) => {
        return router.asPath === link ? "text-amber-400 font-semibold " : ""
    }

    return (
        <header className="px-6 sm:px-12">
            <div className="relative max-w-6xl mx-auto flex justify-between items-center">
                {/* logo */}
                <div className="flex-1 md:flex-grow-0 md:flex-shrink-0">
                    <div className="relative w-20 h-20  md:w-24 md:h-24 ">
                        <Image
                            src="/assets/images/logo.png"
                            alt=""
                            layout="fill"
                        />
                    </div>
                </div>
                {/* navigation menu */}
                <nav className="hidden md:block">
                    <ul className="flex text-black space-x-4">
                        <li>
                            <Link href="/">
                                <a className={`py-1.5 px-3 ${activeLink("/")} hover:underline hover:underline-offset-4`}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/plans">
                                <a className={`py-1.5 px-3  ${activeLink("/plans")} hover:underline hover:underline-offset-4`}>Plans</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a className={`py-1.5 px-3 ${activeLink("/blog")} hover:underline hover:underline-offset-4`}>Blogs</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/reviews">
                                <a className={`py-1.5 px-3 ${activeLink("/reviews")} hover:underline hover:underline-offset-4`}>Reviews</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/transformation">
                                <a className={`py-1.5 px-3 ${activeLink("/transformation")} hover:underline hover:underline-offset-4`}>Transformation</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/testimonial">
                                <a className={`py-1.5 px-3 ${activeLink("/testimonial")} hover:underline hover:underline-offset-4`}>Testimonial</a>
                            </Link>
                        </li>

                    </ul>
                </nav>
                {/* primary cta */}
                <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+your+fitness+plan+and+would+like+to+enroll+for+a+plan.">
                    <a target="_blank" className="hidden sm:block sm:mx-3 md:mx-0  py-2 px-4 rounded-full  font-semibold text-white bg-amber-400 text-sm hover:bg-amber-500">
                        Join Now
                    </a>
                </Link>
                {/* menu button */}
                <button className="block md:hidden py-1.5 px-3  rounded-md border-gray-700 border text-gray-700" onClick={() => setMenu(!menu)}>
                    {
                        menu ? <CloseIcon /> : <MenuIcon />
                    }
                </button>
                {/* mobile navigation */}
                <nav className={`absolute z-[99] top-20  left-0 block  md:hidden w-full ${menu ? "scale-y-100" : "scale-y-0"} origin-top  transition-all`}>
                    <ul className="p-3 py-6 flex flex-col   bg-gray-600 text-white space-y-4">
                        <li>
                            <Link href="/">
                                <a className={`p-2 ${activeLink("/")}`} onClick={() => setMenu(false)}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/plans">
                                <a className={`block p-2 ${activeLink("/plans")}`} onClick={() => setMenu(false)}>Plans</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a className={`block p-2 ${activeLink("/blog")}`} onClick={() => setMenu(false)}>Blogs</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/reviews">
                                <a className={`block p-2 ${activeLink("/reviews")}`} onClick={() => setMenu(false)}>Reviews</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/transformation">
                                <a className={`block p-2 ${activeLink("/transformation")}`} onClick={() => setMenu(false)}>Transformation</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/testimonial">
                                <a className={`block p-2 ${activeLink("/testimonial")}`} onClick={() => setMenu(false)}>Testimonial</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+your+fitness+plan+and+would+like+to+enroll+for+a+plan.">
                                <a className="  py-2 px-4 justify-self-center rounded-full  text-center bg-amber-400 text-white  ">Join Now</a>
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Navbar

const CloseIcon = () => <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 20 20"
    fill="currentColor"
>
    <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
    />
</svg>

const MenuIcon = () => <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
</svg>