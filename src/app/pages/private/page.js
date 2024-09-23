import React from "react";

export default function Page() {
  return (
    <React.Fragment>
      <div
        className="bg-[#E0F3FD] pt-[250px] mt-4  pb-[100px] lg:pb-[600px] relative lg:h-[1000px]"
        style={{
          backgroundImage: `url("/assets/images/WebsiteBG.png")`,
          backgroundSize: "cover",
        }}
      >
        <div className="container m-auto w-[80%]">
         {/*  <h1 className="text-[120px] w-[80%] overflow-hidden absolute lg:left-40 md:left-30 top-[-50px]  text-[#EAF7FC]">
            Comprehensive
          </h1> */}
          <h1 className="relative text-5xl text-center text-[#395A68] mb-5 -mt-40  md:px-24 px-5" style={{ fontFamily: "Optima" }}>
          Private Wealth Accounting Service
          </h1>

          <div className="relative flex flex-col mt-10  bg-white shadow-lg border border-gray-200  rounded-lg w-120" style={{boxShadow: "#395A68 -10px 25px 50px 10px"}}>
            <div className="p-4">
              <h5 className="mb-2 text-[#395A68] text-2xl text-center font-semibold" style={{ fontFamily: "Optima" }}>
                Services
              </h5>
              <p className="text-[#395A68] text-xl mb-10 leading-normal font-light text-center" style={{ fontFamily: "Optima" }}>
              Our specialized accounting services are designed for high net
                worth individuals, focusing on meticulous management of real
                estate, investments, and significant assets. We provide informed
                financial decisions and thorough tracking to optimize management
                and grow your wealth.
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
                <li className="mb-2">Estate Planning</li>
                <li className="mb-2">Investment Portfolio Management</li>
                <li className="mb-2">Trust Services </li>
                <li className="mb-2">Real Estate Portfolio Management </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}