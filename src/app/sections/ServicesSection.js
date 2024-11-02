import React from "react";

import ServicesComponent from "../components/ServicesComponent/ServicesComponent";

export default function ServicesSection() {
  return (
    <React.Fragment>
      <div className="relative bg-[url('/assets/images/blankbackground.png')] opacity-80  bg-auto">
        <div id="services">
          <ServicesComponent />
        </div>
      </div>
    </React.Fragment>
  );
}
