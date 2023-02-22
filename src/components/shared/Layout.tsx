import { useEffect, useState } from "react";
import Link from "next/link";
import type { NextComponentType, NextPageContext } from "next";
// react icons
import { BsInstagram, BsWhatsapp, BsTelephone } from "react-icons/bs";
import { MdVerticalAlignTop } from "react-icons/md";
// custom components
import Navbar from "./Navbar";

interface PropTypes {
  children: React.ReactNode;
}

const Layout: NextComponentType<NextPageContext, {}, PropTypes> = ({
  children,
}) => {
  const [scrollPopup, setScrollPopup] = useState("hidden");
  const scrollObserver = () => {
    if (window.pageYOffset > 640) setScrollPopup("flex");
    else setScrollPopup("hidden");
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollObserver);
    return () => window.removeEventListener("scroll", scrollObserver);
  }, []);
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* contact section */}
      <address
        className={`fixed left-0 top-[32vh] mx-1.5  min-w-fit ${scrollPopup}  animate-slide-in-left`}
      >
        <div className="flex flex-col w-full space-y-2 text-white ">
          {/* instagram link */}
          <Link href="https://www.instagram.com/union._xesthetic/">
            <a
              target="_blank"
              className="p-3 rounded-full group"
              style={{
                background:
                  " linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                filter:
                  "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )",
              }}
            >
              <BsInstagram className="text-xl md:text-2xl" />
            </a>
          </Link>
          {/* whatsapp link */}
          <Link href="https://wa.me/7205539494?text=Hi+%2C+I+am+interested+in+your+fitness+training+program+.+How+can+I+enroll+in+this+program+%3F">
            <a
              target="_blank"
              className="p-3  flex items-center   bg-[#25D366] rounded-full space-x-2 group"
            >
              <BsWhatsapp className="text-xl md:text-2xl " />
            </a>
          </Link>
          {/* contact number */}
          <Link href="tel:7205539494">
            <a
              target="_blank"
              className="p-3  flex items-center   bg-[#4285F4] rounded-full space-x-2 group"
            >
              <BsTelephone className="text-xl md:text-2xl " />
            </a>
          </Link>
        </div>
      </address>
      <button
        className={`fixed bottom-0 right-0 m-3 p-3  md:p-3 md:px-6 ${scrollPopup} items-center rounded-full  bg-blue-600 hover:bg-blue-700 text-white  space-x-2 animate-slide-in-right `}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <MdVerticalAlignTop className="text-xl " />
        <p className="hidden text-xs font-semibold md:block">SCROLL TO TOP</p>
      </button>
      {/* footer */}
      <footer className="flex items-center justify-center p-4 bg-gray-800">
        <p className="font-semibold text-center text-gray-200">
          <small>
            Copyright &copy; {new Date().getFullYear()} Union Xesthetic |
            Yashraj Jaiswal
          </small>
        </p>
      </footer>
    </>
  );
};

export default Layout;
