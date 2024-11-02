import React from "react";


import AboutComponent from "../components/AboutComponent/AboutComponent";

export default function AboutSection() {
  return (
    <React.Fragment>
      <div className="relative bg-[url('/assets/images/blankbackground.png')] opacity-80 bg-auto">
        <div id="about">
          <AboutComponent/>
        </div>
      </div>
    </React.Fragment>
  );
}