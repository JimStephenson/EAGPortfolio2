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
    <div className="flex flex-col h-screen justify-center lg:justify-between items-center p-[5%]">
      <img
        src="/assets/images/WideLogo.png"
        className="hidden md:block w-[65%]  md:w-[65%] col-span-12 opacity-100 z-50"
        decoding="async"
        alt="WideLogo"
      ></img>
       <img
        src="/assets/images/EAGMobileLogo.png"
        className="md:hidden mt-5 w-[60%]   md:w-[60%] col-span-12 opacity-100 z-50"
        decoding="async"
        alt="EAGLogo"
      ></img>
        <div
          className="w-[75%] mt-5 p-5 bg-white justify-center items-center text-center rounded-2xl"
          style={{
            boxShadow: "#395A68 -10px 25px 50px 10px",
            fontFamily: "Optima",
          }}
        >
      <p
        className="text-[#395A68] text-xl font-bold justify-center text-center  md:text-4xl lg:text-2xl 2xl:text-4xl mt-2 lg:mt-2 2xl:mt-10"
        style={{ fontFamily: "Optima" }}
      >
        Accountancy, Payroll & Business Support Services
      </p>
      <h3
        className="text-[#395A68] justify-center text-center w-full text-normal md:text-xl lg:text-lg xl:text-xl mt-10 md:mt-10 lg:mt-5 2xl:mt-15 mb-5"
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
      
     
        <a
          //   href="/page/contactme"
          href="/#contact"
          className="mt-10 justify-center text-center cursor-pointer  bg-[#395A68] transition-all duration-300 ease-in-out rounded-lg text-[#9aabb2] py-3 px-5 font-bold  lg:px-8 text-normal lg:text-lg 2xl:text-xl md:mt-5 lg:mt-10 2xl:mt-10 hover:bg-[#223740] hover:shadow-lg transform hover:translate-y-1"
          style={{ fontFamily: "Optima" }}
        >
          Get in touch
        </a>
        
        </div>

        {/* SLIDER */}

        <div className="hidden md:block container justify-center items-center w-full  mt-10 2xl:mt-20">
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
