import React from "react";
import { sliderSettings } from "@/app/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Landing.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <AiOutlineArrowLeft className="arrows" style={{color:"white"}}/>
    </div>
  )
  }

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <AiOutlineArrowRight className="arrows" style={{color:"white"}}/>
    </div>
  )
}

export default function LandingComponent() {
  return (
    <React.Fragment>
    <div className="flex flex-col justify-center items-center">
      <img
        src="/assets/images/WideLogo.png"
        className="hidden md:block mt-20 w-[600px]  md:w-[1150px] col-span-12 opacity-100 z-50"
        decoding="async"
        alt="WideLogo"
      ></img>
       <img
        src="/assets/images/WideLogo.png"
        className="md:hidden mt-20 w-[600px]  md:w-[1150px] col-span-12 opacity-100 z-50"
        decoding="async"
        alt="EAGLogo"
      ></img>
      <p
        className="text-[#395A68] text-lg font-semibold justify-center text-center sd:text-[8px] md:text-4xl lg:text-5xl mt-20"
        style={{ fontFamily: "Optima" }}
      >
        Accountancy, Payroll & Business Support Services
      </p>
      <h3
        className="text-[#395A68] font-semibold w-[75%] text text-lg md:text-xl lg:text-2lg xl:text-xl mt-10 md:mt-10 "
        style={{ fontFamily: "Optima" }}
      >
        Our mission is to empower small and medium-sized enterprises (SMEs) by
        not only managing their financial records but by becoming a trusted
        partner in their growth journey. We deliver comprehensive financial
        reporting and insights that drive informed decision-making, enhance
        profitability, and fuel long-term business success. Through our
        proactive approach, we aim to transform financial management into a
        powerful tool for growth, helping our clients achieve their
        full potential.
      </h3>
      <div className="flex flex-row w-[60%] justify-evenly">
        <a
          href="/#about"
          className="cursor-pointer inline-block bg-[#395A68] transition-all duration-300 ease-in-out rounded-lg text-[#9aabb2] py-3 px-5 font-medium mt-40 md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 lg:mt-10 hover:bg-[#223740] hover:shadow-lg transform hover:translate-y-1"
          style={{ fontFamily: "Optima" }}
        >
          Learn more
        </a>
        <a
          //   href="/page/contactme"
          href="/#contact"
          className="ml-10 cursor-pointer inline-block bg-[#395A68] transition-all duration-300 ease-in-out rounded-lg text-[#9aabb2] py-3 px-5 font-medium mt-40 md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 lg:mt-10 hover:bg-[#223740] hover:shadow-lg transform hover:translate-y-1"
          style={{ fontFamily: "Optima" }}
        >
          Get in touch
        </a>
        </div>

        {/* SLIDER */}

        <div className="hidden md:block container justify-center items-center w-full  mt-20">
        <div
          // className="relative max-w-sm bottom-[70px] md:max-w-5xl xl:max-w-6xl px-5 lg:px-14 overflow-auto mx-auto bg-white rounded-2xl z-20"
          // className=" bg-white rounded-2xl overflow-auto max-w-sm md:max-w-5xl xl:max-w-6xl z-20"
          className=" bg-white rounded-2xl overflow-auto z-20"
          style={{ boxShadow: "#395A68 -10px 25px 50px 10px" }}
        >
          <div className="lg:py-10 md:py-6 sm:py-6 ">
            <Slider {...sliderSettings}>
            
  
              <h3
                className="mr-380 text-[#395A68]  text-left"
                style={{ fontFamily: "Optima" }}
              >
                {" "}
                Expert implementation of complex accounting systems with
                precision{" "}
              </h3>
              <h3
                className="mr-380 text-[#395A68]  text-left"
                style={{ fontFamily: "Optima" }}
              >
                {" "}
                Dedicated professionals who consistently exceed expectations{" "}
              </h3>
              <h3
                className="mr-380 text-[#395A68]  text-left"
                style={{ fontFamily: "Optima" }}
              >
                Innovative leaders delivering solutions to business challenges
              </h3>
              <h3
                className="mr-380 text-[#395A68]  text-left"
                style={{ fontFamily: "Optima" }}
              >
                Deadlines met with accuracy and attention to detail
              </h3>
              <h3
                className="mr-380 text-[#395A68]  text-left"
                style={{ fontFamily: "Optima" }}
              >
                Above-and-beyond contributions to your business success
              </h3>
              <h3
                className="mr-380 text-[#395A68]  text-left"
                style={{ fontFamily: "Optima" }}
              >
                Trustworthy, communicative, and valuable team assets
              </h3>
             
             
            </Slider>
          </div>
        </div>
        </div>
      </div>
      </React.Fragment>
  );
}
