import React from "react";

import TestimonialComponent from "../components/TestimonialComponent/TestimonialComponent";

export default function TestimonialSection() {
  return (
    <React.Fragment>
      <div className="relative bg-[url('/assets/images/WebsiteBG.png')] opacity-80 bg-auto">
        <div id="testimonial">
          <TestimonialComponent />
        </div>
      </div>
    </React.Fragment>
  );
}
