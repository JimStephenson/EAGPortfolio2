import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <div
        className=" pt-[250px] mt-4  pb-[100px] lg:pb-[600px] relative lg:h-[1000px]"
        style={{
          backgroundImage: `url("/assets/images/blankbackground.png")`,
          backgroundSize: "cover",
        }}
      >
        <div className="container m-auto w-[80%]">
         {/*  <h1 className="text-[120px] w-[80%] overflow-hidden absolute lg:left-40 md:left-30 top-[-50px]  text-[#EAF7FC]">
            Comprehensive
          </h1> */}
          <h1 className="relative text-5xl text-center text-[#395A68] mb-5 -mt-40  md:px-24 px-5" style={{ fontFamily: "Optima" }}>
          Strategic Advisory Service
          </h1>

          <div className="relative flex flex-col mt-10  bg-white shadow-lg border border-gray-200  rounded-lg w-120" style={{boxShadow: "#395A68 -10px 25px 50px 10px"}}>
            <div className="p-4">
              <h5 className="mb-2 text-[#395A68] text-2xl text-center font-semibold" style={{ fontFamily: "Optima" }}>
                Services
              </h5>
              <p className="text-[#395A68] text-xl mb-10 leading-normal font-light text-center" style={{ fontFamily: "Optima" }}>
              Explore our strategic business advisory services, designed to
                drive growth and enhance operational efficiency. We provide
                expert financial strategy development and cost management
                advice, aiding you in navigating market complexities and
                achieving sustainable success.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col mt-20 bg-white shadow-lg border border-gray-200 rounded-lg w-120" style={{boxShadow: "#395A68 -10px 25px 50px 10px"}}>
            <div className="p-4">
              <h5 className="mb-2 text-[#395A68] text-2xl text-center font-semibold" style={{ fontFamily: "Optima" }}>
                What we provide
              </h5>
              <ul
                className=" mt-10 text-[#395A68] px-5 mb-10 text-xl text-center list-none"
                style={{ fontFamily: "Optima" }}
              >
               <li className="mb-2">Market Entry Strategies</li>
                <li className="mb-2">Growth Planning</li>
                <li className="mb-2">Financial Forecasting </li>
                <li className="mb-2">Cost-benefit Analysis </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}