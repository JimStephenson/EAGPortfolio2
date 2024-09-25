
import React  from "react";
import { AboutData } from "@/app/data";
import CellPhoneServicesComponent from "./CellPhoneServicesComponent";
import NonCellphoneServicesComponent from "./NonCellphoneServicesComponent";



export default function ServicesComponent() {
 
  return (
    <React.Fragment>
      <div
        id="services"
       
         className=" pt-[3rem] md:pt-[7rem]   h-fit   relative ">
        <div className="container  justify-center pb-[2.5rem] p-5 md:p-20">
         
          <h1 className="relative font-bold text-5xl lg:text-4xl 2xl:text-5xl text-center text-[#395A68] -mt-[3rem] lg:-mt-[6rem] " style={{ fontFamily: "Optima" }}>
            Services
          </h1>
          <CellPhoneServicesComponent  />
          <NonCellphoneServicesComponent />
        
          </div>
        </div>
      
    </React.Fragment>
  );
}