"use client";
import React, { useEffect, useState } from "react";
import Drawer from "./DiagonalDrawer";
import "../Header/DiagonalDrawer.css";
import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";

//import { AboutData } from "@/app/data";

export default function Header() {
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
      console.log("Header scrollTop : ", scrollTop);
      console.log("Header isScrolled : ", isScrolled);
      console.log(
        "Header doc.scrolltop : ",
        document.documentElement.scrollTop
      );
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openDrawer = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <div className={`diagonal-drawer ${isOpen ? "open" : ""}`}>
        <Drawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedIndex1={selectedIndex1}
          setSelectedIndex1={setSelectedIndex1}
        />
      </div>
      <header
        className={`${
          isScrolled ? "headerShow" : ""
        } w-full fixed top-0 z-50 transition-all duration-500`}
      >
        <div className="relative">
          <div
            onClick={openDrawer}
            className="z-30 absolute cursor-pointer w-14 h-14 lg:w-24 lg:h-24 bg-[#395A68] flex justify-center items-center rounded-br-3xl"
          >
            <div className="relative w-7 lg:w-10 h-7 lg:h-10 flex justify-center items-center">
              <Image
                height={100}
                width={100}
                src="/assets/images/drawer.png"
                alt="drawer item"
                className="w-[150px] h-10"
              />
            </div>
           
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <nav className="hidden xl:block xl:max-w-4xl 2xl:max-w-7xl mx-auto ">
            <ul
              className="flex  flex-row justify-center items-center h-24"
              style={{ fontFamily: "Optima" }}
            >
              <li className="group text-2xl relative font-bold mr-10">
                {
                  selectedIndex1 === 0 ? (
                    <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                  ) : (
                    ""
                  ) /* (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) */
                }
                <a
                  className={`menu-item ${
                    selectedIndex1 === 0 ? "text-[#395A68]" : ""
                  } text-[#395A68] group-hover:text-black`}
                  href="/#home"
                  onClick={() => setSelectedIndex1(0)}
                  style={{ fontFamily: "Optima" }}
                >
                  Home
                </a>
              </li>
              <li className="group text-2xl relative font-bold mr-10">
                {selectedIndex1 === 1 ? (
                  <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                ) : (
                  <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                )}
                <a
                  className={`menu-item ${
                    selectedIndex1 === 1 ? "text-[#395A68]" : ""
                  } text-[#395A68] group-hover:text-black`}
                  href="/#about"
                  onClick={() => setSelectedIndex1(1)}
                  style={{ fontFamily: "Optima" }}
                >
                  About
                </a>
              </li>
              <li className="group text-2xl relative font-bold mr-10">
                {
                  selectedIndex1 === 2 ? (
                    <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                  ) : (
                    ""
                  ) /* (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) */
                }
                <a
                  className={`menu-item ${
                    selectedIndex1 === 2 ? "text-[#395A68]" : ""
                  } text-[#395A68] group-hover:text-black`}
                  href="/#services"
                  onClick={() => setSelectedIndex1(2)}
                  style={{ fontFamily: "Optima" }}
                >
                  Services
                </a>
              </li>

              <li className="group text-2xl relative font-bold mr-10">
                {
                  selectedIndex1 === 3 ? (
                    <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                  ) : (
                    ""
                  ) /* (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) */
                }
                <Link
                  className={`menu-item ${
                    selectedIndex1 === 3 ? "text-[#395A68]" : ""
                  } text-[#395A68] group-hover:text-black`}
                  href="/pages/contactme"
                  onClick={() => setSelectedIndex1(3)}
                  style={{ fontFamily: "Optima" }}
                >
                  Contact
                </Link>
              </li>
              <li className="group text-2xl relative font-bold mr-10">
                {
                  selectedIndex1 === 4 ? (
                    <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                  ) : (
                    ""
                  ) /* (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) */
                }
                <Link
                  className={`menu-item ${
                    selectedIndex1 === 4 ? "text-[#395A68]" : ""
                  } text-[#395A68] group-hover:text-black`}
                  href="/#testimonial"
                  onClick={() => setSelectedIndex1(4)}
                  style={{ fontFamily: "Optima" }}
                >
                  Testimonial
                </Link>
              </li>
              <li className="group text-2xl relative font-bold mr-10">
                {
                  selectedIndex1 === 5 ? (
                    <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                  ) : (
                    ""
                  ) /* (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) */
                }
                <Link
                  className={`menu-item ${
                    selectedIndex1 === 5 ? "text-[#395A68]" : ""
                  }text-[#395A68] group-hover:text-black`}
                  href="/pages/blog"
                  onClick={() => setSelectedIndex1(5)}
                  style={{ fontFamily: "Optima" }}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
              <div className="mt-5 xl:mt-0 flex flex-row text-start items-center justify-center">
          <FaPhone style={{color: '#395A68'}} />
          <p className="text-xl  xl:text-2xl relative font-bold text-[#395A68] mr-0 xl:mr-50 2xl:mr-100"  style={{ fontFamily: "Optima" }}> &nbsp; 020 8133 5602&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
