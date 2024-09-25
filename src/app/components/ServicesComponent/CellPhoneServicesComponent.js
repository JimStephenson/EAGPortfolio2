import React from "react";
import { AboutData } from "@/app/data";

export default function CellPhoneServicesComponent() {
  return (
    <React.Fragment>
        <div className="lg:hidden">
      {AboutData.map((obj, index) => (
        <div
          key={index}
          className=" mt-10 mb-0 lg:mb-0 bg-white border border-gray-200 rounded-lg shadow-md "
          style={{ boxShadow: "#395A68 -10px 25px 50px 10px" }}
        >
          <h2
            className="  text-center md:text-start font-bold text-[#395A68] text-2xl mt-10 md:ml-20"
            style={{ fontFamily: "Optima" }}
          >
            {/* { "(" + obj.count + ") " + obj.title} */}
            {obj.title}
          </h2>

          <p
            className="  text-center md:text-start text-[#395A68] text-xl mt-10 md:ml-20"
            style={{ fontFamily: "Optima" }}
          >
            {obj.description}
          </p>
          {/* <h4>{obj.array}</h4> */}

          <ul
            className="font-[300] text-center md:text-start mt-10 md:ml-24 list-none md:list-disc text-[#395A68]   text-base lg:text-lg transition duration-500 transform  opacity-100 undefined undefined"
            style={{ fontFamily: "Optima" }}
          >
            {obj.array.map((step) => (
              <li className=" text-[#395A68]" key={step}>
                {step}
              </li>
            ))}
          </ul>

          <p className="text-base md:ml-20 mb-10 lg:text-lg text-center text-[#395A68] md:text-start mt-5 text-decoration: underline">
            <a href={obj?.link} style={{ fontFamily: "Optima" }}>
              Learn More
            </a>
          </p>
        </div>
      ))}
      </div>
    </React.Fragment>
  );
}
