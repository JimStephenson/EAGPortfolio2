"use client";
import Image from "next/image";
import LandingSection from "./sections/LandingSection";
import AboutSection from "./sections/AboutSection,";
import ServicesSection from "./sections/ServicesSection";
import ContactSection from "./sections/ContactSection";
import TestimonialSection from "./sections/TestimonialSection";

import CallToAction from "./components/CallToAction/CallToAction";

export default function Home() {
  return (
    <div>
      <LandingSection />
      <AboutSection />
      <ServicesSection />
      {/* {/*  <ContactSection /> *} */}
      <TestimonialSection />

      <CallToAction />
    </div>
  );
}
