
import React  from "react";
import { AboutData } from "@/app/data";
import CellPhoneServicesComponent from "./CellPhoneServicesComponent";
import NonCellphoneServicesComponent from "./NonCellphoneServicesComponent";



export default function ServicesComponent() {
 
  return (
    <React.Fragment>
      <div
        id="services"
       
         className=" pt-[50px] md:pt-[100px]   h-fit   relative ">
        <div className="container mb-30 justify-center pb-40 p-20">
         
          <h1 className="relative text-5xl text-center text-[#395A68] -mt-50 " style={{ fontFamily: "Optima" }}>
            Services we offer
          </h1>
          <CellPhoneServicesComponent  />
          <NonCellphoneServicesComponent />
        
          </div>
        </div>
      
    </React.Fragment>
  );
}