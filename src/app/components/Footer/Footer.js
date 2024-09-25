import React from "react";
import Accordian from "./Accordian";

export default function Footer() {
  const service = [
    "Comprehensive Accounting",
    "Payroll Management",
    "Private Wealth Accounting",
    "Performance Insights",
    "Risk & Recovery Planning",
    "Strategic Advisory",
    "Business Website Development",
  ];

  const servicelinks = [
    "/pages/comprehensive",
    "/pages/payroll",
    "/pages/private",
    "/pages/performance",
    "/pages/risk",
    "/pages/strategic",
    "/pages/website",
  ];
  const company = ["About"];

  const companyLinks = ["/#about-me-component"];

  const helping = ["Contact"];

  const helpingLinks = ["/pages/contactme"];

  const legal = ["Still to be decided"];

  const legalLinks = ["/pages/contactme"];

  return (
    <div id="footer" className="bg-[url('/assets/images/WebsiteBG.png')] opacity-80 bg-auto pt-0 lg:pt-0 2xl:pt-0 " >
      <div
        className="max-w-[1140px] bg-[#79AFBA] rounded-xl px-[120px] sm:px-[64px] sm:py-[30px] m-auto"
        style={{ transform: "translate(0px, 70px)" }}
      >
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-9">
            <p
              className="text-[30px] text-white text-center lg:text-start"
              style={{ fontFamily: "Optima" }}
            >
              Ready To Get Started?
            </p>
            <p
              className="text-white font-sans text-center lg:text-start"
              style={{ fontFamily: "Optima" }}
            >
              Our Team at Elevation Accounting Group are waiting to provide you
              with top rate solutions to your business problems
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="flex justify-center mt-5 lg:mt-0 mb-5 md:mb-0">
              <a
                href="/pages/contactme"
                className="font-bold cursor-pointer px-10 py-5 bg-black rounded-xl text-white text-lg "
                style={{ fontFamily: "Optima" }}
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Items for CELLPHONE md:hidden */}

      <footer className="bg-[#223740]">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="container mx-auto p-4 md:hidden block mt-5">
            <Accordian
              title="Services"
              content={service}
              links={servicelinks}
            />
            <Accordian
              title="Company Policy"
              content={company}
              links={companyLinks}
            />
            <Accordian title="Help" content={helping} links={helpingLinks} />
            <Accordian
              title="Legal Policies"
              content={legal}
              links={legalLinks}
            />
          </div>

          {/* <div className="grid gap-6 grid-cols-9 md:pt-20">
            <div className="md:block hidden"></div> */}

            {/* Footer items for NON SM DEVICE md:block hidden */}
            <div className="md:block hidden">
              <div className="-mt-10 flex flex-row">
              <p className="font-medium w-[15%] gap-x-10 gap-y-0 text-white font-sans">Services</p>
              <ul className=" flex flex-row gap-x-5  text-sm">
                {service.map((item, index) => (
                  <li key={item}>
                    <a
                      href={servicelinks[index]}
                      className="text-[#7b858b] font-sans hover:opacity-75 cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>

            <div className="md:block hidden">
            <div className="-mt-10 flex flex-row">
              <p className="font-medium w-[15%] gap-x-10 gap-y-0 text-white font-sans">Company Policy</p>
              <ul className="flex flex-row text-sm">
                {company.map((item, index) => (
                  <li key={item}>
                    <a
                      href={companyLinks[index]}
                      className="text-[#7b858b] font-sans hover:opacity-75 cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>

            

            <div className="md:block hidden">
            <div className="-mt-10 flex flex-row">
              <p className="font-medium w-[15%] gap-x-10 gap-y-0 text-white font-sans">Help</p>
              <ul className="flex flex-row text-sm">
                {helping.map((item, index) => (
                  <li key={item}>
                    <a
                      href={helpingLinks[index]}
                      className="text-[#7b858b] font-sans hover:opacity-75 cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>

            <div className="md:block hidden">
            <div className="-mt-10 flex flex-row">
              <p className="font-medium w-[15%] gap-x-10 gap-y-0 text-white font-sans">Legal Policies</p>
              <ul className="flex flex-row text-sm">
                {legal.map((item, index) => (
                  <li key={item}>
                    <a
                      href={legalLinks[index]}
                      className="text-[#7b858b] font-sans hover:opacity-75 cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          {/* </div> */}

          {/* Social Media Icons */}
          <div className="xl:max-w-6xl 2xl:max-w-7xl md:px-10 xl:px-10  sm:py-10 overflow-hidden">
            <div className="flex flex-wrap justify-between items-center">
              {/* LINKEDIN */}
              <div className=" w-1/3 sm:w-auto sm:mx-4 mb-5 sm:mb-0">
                <a
                  className="group flex flex-col items-center justify-center"
                  target="_blank"
                  href=""
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                  <h5 className=" mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]" style={{ fontFamily: "Optima" }}>
                    LinkedIn
                  </h5>
                </a>
              </div>
              {/* FACEBOOK */}
              <div className=" w-1/3 sm:w-auto sm:mx-4 mb-5 sm:mb-0">
                <a
                  className="group flex flex-col items-center justify-center"
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61565489550558"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook icon</title>
                    <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
                  </svg>

                  <h5 className=" mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base  text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]" style={{ fontFamily: "Optima" }}>
                    Facebook
                  </h5>
                </a>
              </div>

              {/* GMAIL */}
              <div className=" w-1/3 sm:w-auto sm:mx-4 mb-5 sm:mb-0">
                <a
                  className="group flex flex-col items-center justify-center"
                  target="_blank"
                  href=""
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg>
                  <h5 className="mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]" style={{ fontFamily: "Optima" }}>
                    GMail
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
