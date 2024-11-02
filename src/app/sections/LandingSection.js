import React from "react";
import LandingComponent from "../components/LandingComponent/LandingComponent";


export default function LandingSection() {
  return (
    <React.Fragment>
      <div className="relative h-screen overflow-clip">
        <div
          id="home"
          style={{
            backgroundImage: `url("/assets/images/newBackground.png")`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100vm",
            
          }}
        >
          <LandingComponent/>
        </div>
      </div>
    </React.Fragment>
  );
}
