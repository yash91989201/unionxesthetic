import { useEffect, useState } from "react";
import Link from "next/link"
import type { NextComponentType, NextPageContext } from "next";
// react icons
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { MdVerticalAlignTop } from "react-icons/md"

// custom components
import Navbar from "./Navbar"

interface PropTypes {
    children: React.ReactNode
}

const Layout: NextComponentType<NextPageContext, {}, PropTypes> = ({ children }) => {
    const [scrollPopup, setScrollPopup] = useState("hidden")
    const scrollObserver = () => {
        if (window.pageYOffset > 640)
            setScrollPopup("flex")
        else
            setScrollPopup("hidden")
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollObserver)
        return () => window.removeEventListener("scroll", scrollObserver)
    }, [])
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            {/* contact section */}
            <address className={`fixed left-0 top-[40vh] mx-0.5  min-w-fit ${scrollPopup}  animate-slide-in-left`}>
                <div className="w-full  flex flex-col text-white space-y-2 ">
                    <Link href="https://www.instagram.com/union._xesthetic/">
                        <a target="_blank" className="p-3 rounded-full group"
                            style={{
                                background: " linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                                filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )",
                            }}
                        >
                            <BsInstagram className="text-xl md:text-2xl lg:text-3xl  " />
                        </a>
                    </Link>
                    <Link href="https://wa.me/whatsappphonenumber?text=Hi%2C+I+would+like+to+know+more+about+the+fitness+plan.">
                        <a target="_blank" className="p-3  flex items-center   bg-[#25D366] rounded-full space-x-2 group">
                            <BsWhatsapp className="text-xl md:text-2xl lg:text-3xl" />
                        </a>
                    </Link>
                </div>
            </address>
            <button
                className={`fixed bottom-0 right-0 m-3 p-3  md:p-3 md:px-6 ${scrollPopup} items-center rounded-full  bg-blue-600 hover:bg-blue-700 text-white  space-x-2 animate-slide-in-right `}
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }}
            >
                <MdVerticalAlignTop className="text-xl " />
                <p className="hidden md:block text-xs font-semibold">SCROLL TO TOP</p>
            </button>
            {/* footer */}
            <footer className="flex justify-center items-center bg-gray-800">
                <div>
                </div>
                <p className="text-gray-300 font-semibold">Copyright ©2022 All rights reserved | Made by yash</p>
            </footer>
        </>
    )
}

export default Layout