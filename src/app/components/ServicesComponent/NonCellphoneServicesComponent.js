"use client";
import React, { useState } from "react";
import { AboutData } from "@/app/data";
import Image from "next/image";
import "./services.css";



export default function NonCellphoneServicesComponent() {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isFaded, setIsFaded] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [mapData, setMapData] = useState(AboutData[0]);

    const myFunctions = (data) => {
        setIsFlipped(false);
        setIsFaded(false);
        setMapData(data);
      };
    
      const handleCardClick = (data, index) => {
        setIsFlipped(true);
        setIsFaded(true);
        setSelectedIndex(index);
    
        setTimeout(() => myFunctions(data), 600);
      };
    
      const HandleNext = () => {
        if (selectedIndex < 6) {
          handleCardClick(AboutData[selectedIndex + 1], selectedIndex + 1);
        } else {
          handleCardClick(AboutData[0], 0);
        }
      };
      const HandlePrev = () => {
        if (selectedIndex !== 0) {
          handleCardClick(AboutData[selectedIndex - 1], selectedIndex - 1);
        } else {
          handleCardClick(AboutData[6], 6);
        }
      };

  return (
    <React.Fragment>
        <div className="hidden lg:block">
           <h4 className="relative w-full font-bold mt-10 md:w-full lg:w-full xl:w-1/2 text-[#395A68] text-xl lg:text-3xl 2xl:text-3xl mb-10 px-5 md:px-24" style={{ fontFamily: "Optima" }}>
            {AboutData[selectedIndex].title}
          </h4>
          <p className="relative w-full    text-[#395A68] lg:text-xl text-2xl mb-10 px-5 md:px-24" style={{ fontFamily: "Optima" }}>
            {AboutData[selectedIndex].description}
          </p>

          <section className="container flex  flex-col  sm:flex-row px-5 md:px-24 mt-0 " >
          <div className=" hidden sm:flex w-full sm:w-full lg:w-full" >
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mr-0 lg:mr-10" >
              {AboutData.map((item, index) => (
                <a
                  key={index}
                  onClick={() => handleCardClick(item, index)}
                  style={{ boxShadow: "#79AFBA -5px  10px 20px 0px" }}
                  className={`relative cursor-pointer transition-all transform duration-300 group rounded-xl center p-6 lg:p-10 flex flex-col justify-center  items-center ${
                    selectedIndex == index
                      ? " -translate-y-2 bg-[#476571]"
                      : "hover:bg-[#476571] hover:shadow-xl hover:-translate-y-2 bg-white"
                  }`}
                >
                  <div className="w-16 h-16 sm:w-10 sm:h-10  lg:w-16 lg:h-16">
                    <Image
                      height={100}
                      width={100}
                      src={item.img}
                      alt="internet issues"
                    />
                  </div>
                  <h4 style={{ fontFamily: "Optima" }}
                    className={`text-center text-sm lg:text-xl transition-colors duration-500 group-hover:text-white text-[#395A68] mt-3 ${
                      selectedIndex === index ? "text-white" : ""
                    }`}
                  >
                    {item.title}
                  </h4>

             
                </a>
              ))}
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-5/12 overflow-visible px-0 sm:pl-6 xl:px-10">
            <div className="bg-white  lg:mt-0 mt-10 rounded-xl p-10 xl:p-12 shadow-accent-color relative"    style={{
            boxShadow: "#395A68 -10px 25px 50px 10px",
            fontFamily: "Optima",
          }}>
              <section
                className={`fade-left overflow-hidden ${
                  isFaded ? "fade-out" : ""
                }`}
              >
                <p
                  className="text-[#395A68] text-lg sm:text-base lg:text-xl transition duration-500 transform opacity-100 undefined undefined"
                  style={{ fontFamily: "Optima" }}
                >
                  EAG Services for
                </p>
                <h2 className=" text-[#395A68] text-3xl mt-5 sm:text-2xl md:text-3xl mb-6 w-44 md:w-56 transition duration-500 transform opacity-100 undefined undefined" style={{ fontFamily: "Optima" }}>
                  {mapData?.title}
                </h2>

                <ul
                  className="font-[300] list-disc text-[#395A68] ml-8 lg:ml-10 text-base lg:text-lg transition duration-500 transform  opacity-100 undefined undefined"
                  style={{ fontFamily: "Optima" }}
                >
                  {mapData?.array?.map((obj) => (
                    <li key={obj} className="mb-2">
                      {obj}
                    </li>
                  ))}
                </ul>
                <p className="text-base lg:text-lg text-[#395A68] text-start mt-5 text-decoration: underline">
              <a href={mapData?.link} style={{ fontFamily: "Optima" }}>Learn More</a>
              </p>
              </section>
              <div
                className={`absolute perspective-500 -top-7 sm:top-30 -right-5 sm:-right-20 card ${
                  isFlipped ? "flipped" : ""
                }`}
              >
                {/* <div className="card-inner">
                  <div className="rounded-2xl cursor-pointer  text-3xl text-center justify-center xl:text-3xl font-recoletaBlack text-white bg-[#47626D]  p-3 xl:p- w-20 h-20 xl:w-20 xl:h-20  transform transition duration-500 transform-preserve -rotate-6 transform-preserve">
                    <span className="text-2xl xl:text-2xl mr-2 sm:mr-3">*</span>
                    {mapData.count+100}
                  </div>
                </div> */}
              </div>

              <div className="absolute right-10  -bottom-5 flex">
                <a
                  onClick={HandlePrev}
                  className="w-12 h-12 rounded-xl mr-1 transform transition duration-500  cursor-pointer  hover:-translate-y-1 hover:shadow-lg -rotate flex justify-center items-center bg-[#47626D]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </a>
                <a
                  onClick={HandleNext}
                  className="w-12 h-12 rounded-xl mr-1 transform transition duration-500  cursor-pointer  hover:-translate-y-1 hover:shadow-lg -rotate flex justify-center items-center bg-[#47626D]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          </section>
          </div>
    </React.Fragment>
  )
}
