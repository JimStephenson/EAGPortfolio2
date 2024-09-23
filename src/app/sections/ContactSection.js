import React from "react";


import ContactComponent from "../components/ContactComponent/ContactComponent";

export default function ContactSection() {
  return (
    <React.Fragment>
      <div className="relative h-screen overflow-hidden">
        <div
          id="contact"
          style={{
            backgroundImage: `url("/assets/images/EAGWebBackground.png")`,
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <ContactComponent/>
        </div>
      </div>
    </React.Fragment>
  );
}