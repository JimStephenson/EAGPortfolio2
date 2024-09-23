import React from "react";

export default function AboutComponent() {
  return (
    <React.Fragment>
      <div
        id="about"
        // className=" pt-[250px] mt-4  pb-[100px] lg:pb-[600px] relative lg:h-[800px]"
        className=" pt-[50px] md:pt-[150px]   h-fit md:h-screen   relative "
      >
        <div className="container m-auto mb-30">
          {/* <h1 className="text-[200px] w-[80%] overflow-hidden absolute lg:left-40 md:left-30 -top-[-50px] z-0 text-[#EAF7FC]">
            Blogs
          </h1> */}
          <h1 className="relative  text-5xl text-center text-[#395A68] -mt-50 " style={{ fontFamily: "Optima" }}>
            About Us
          </h1>
          <div className="flex flex-col items-center justify-center mt-20 ">
        <div
          className="w-[85%] md:w-[96%]"
          style={{
            boxShadow: "#395A68 -10px 25px 50px 10px",
            fontFamily: "Optima",
          }}
        >
          <h4 className="relative w-full mt-30 text-lg text-center  text-[#395A68]   p-5 md:px-5  bg-white border border-gray-200 rounded-lg shadow-md">
            Our mission is to empower small and medium-sized enterprises (SMEs)
            by not only managing their financial records but by becoming a
            trusted partner in their growth journey. We deliver comprehensive
            financial reporting and insights that drive informed
            decision-making, enhance profitability, and fuel long-term business
            success. Through our proactive approach, we aim to transform
            financial management into a powerful tool for growth, helping our
            clients achieve their full potential.
          </h4>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-[3%] pb-40">
        <div
          className=" mt-10 w-[75%]  md:w-[30%] h-[250px] md:h-[350px] lg:h-[200px] bg-white border border-gray-200 rounded-lg shadow-md p-6 "
          style={{ boxShadow: "#395A68 -10px 25px 50px 10px" }}
        >
          <p className="text-center text-xl text-[#395A68]  font-bold"  style={{ fontFamily: "Optima" }}
          >Our Mission</p>
          <p
            className=" text-[#395A68] mr-0 mb-5 text-xl  lg:mr -4 font-[200]"
            style={{ fontFamily: "Optima" }}
          >
            We collaborate with small and medium-sized enterprises, managing
            their financials and delivering strategic insights that fuel growth
            and ensure lasting success.
          </p>
        </div>

        <div
          className=" mt-10  p-6 w-[75%] md:w-[30%] h-[200px] md:h-[350px] lg:h-[200px] bg-white border border-gray-200 rounded-lg shadow-md"
          style={{ boxShadow: "#395A68 -10px 25px 50px 10px" }}
        >
          <p className="text-center text-xl text-[#395A68] font-bold "  style={{ fontFamily: "Optima" }}
          >Tailored Solutions</p>
          <p
            className=" text-[#395A68] mr-0 mb-5 text-xl lg:mr-4 font-[200]"
            style={{ fontFamily: "Optima" }}
          >
            We craft customized strategies that align with your business vision,
            empowering your operations and decision-making.
          </p>
        </div>

        <div
          className=" mt-10 p-6 w-[75%] md:w-[30%] h-[200px] md:h-[350px] lg:h-[200px] bg-white border border-gray-200 rounded-lg shadow-md "
          style={{ boxShadow: "#395A68 -10px 25px 50px 10px" }}
        >
          <p className="text-center text-xl text-[#395A68] font-bold"  style={{ fontFamily: "Optima" }}
          >Holistic Approach</p>
          <p
            className=" text-black mr-0 mb-5  text-xl lg:mr-4 font-[200] "
            style={{ fontFamily: "Optima" }}
          >
            We provide comprehensive financial guidance to foster sustainable
            growth for your business.
          </p>
        </div>
      </div>
      </div>
        </div>
      </div>
    </React.Fragment>
  );
}
