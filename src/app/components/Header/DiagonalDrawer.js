import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaPhone } from "react-icons/fa6";

export default function DiagonalDrawer({
  isOpen,
  setIsOpen,
  selecttedIndex1,
  setSelectedIndex1,
}) {
  const route = useRouter();
  const pathname = usePathname();
  return (
    <React.Fragment>
      <div className="relative">
        {/*remove the 96 and change it to 0 */}
        <div
          className={`z-50 ${
            pathname === "/" ? "top-[0px]" : "top-[0px]"
          } cursor-pointer fixed w-14 h-14 lg:w-24 lg:h-24 bg-[#79AFBA] top-0 flex justify-center items-center rounded-br-3xl`}
          
        >
          <div
            onClick={() => setIsOpen(false)}
            className="relative w-7 lg:w-10 h-7 lg:h-10 flex justify-center items-center"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-white cursor-pointer  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      {/*remove the 96 and change it to 0 */}
      <header
        className={`fixed w-full transition-all duration-500 z-40 ${
          pathname === "/" ? "top-0" : "top-[0px]"
        }`}
      >
        <div className="relative">
          <div className="z-20 absolute transform-gpu ease-in-out duration-300 transition-all scale-100 opacity-100 bg-[#223740] bg-opacity-95 w-full  h-screen top-0 flex flex-col  lg:flex-col items-center justify-center ">
            <nav className="text-white font-recoletaBold text-center text-4xl lg:text-3xl 2xl:text-5xl uppercase">
              <ul className="flex flex-col">
                <li className="group my-4 xl:my-4 2xl:my-6 relative">
                  <div className="inline-block relative">
                    <a
                      // target="blank"
                      href="/#home"
                      onClick={() => {
                        setSelectedIndex1(0);
                        setIsOpen(false);
                      }}
                      style={{ fontFamily: "Optima" }}
                    >
                      Home
                    </a>
                    {selecttedIndex1 === 0 ? (
                      <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6  opacity-100  group-hover:rotate-6 group-hover:opacity-100 bg-[#79AFBA] rounded-xl -z-10"></div>
                    ) : (
                      ""
                    )}
                    <div className="absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0  opacity-0  group-hover:-rotate-6 group-hover:opacity-100 bg-[#79AFBA] rounded-xl -z-10"></div>
                  </div>
                </li>

                <li className="group my-2 xl:my-4 2xl:my-6 relative">
                  <div className="inline-block relative">
                    <a
                      // target="blank"
                      href="/#about"
                      onClick={() => {
                        setSelectedIndex1(1);
                        setIsOpen(false);
                      }}
                      style={{ fontFamily: "Optima" }}
                    >
                      About
                    </a>
                    {selecttedIndex1 === 1 ? (
                      <div className="absolute top-2  -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6  opacity-100  group-hover:-rotate-6 group-hover:opacity-100 bg-[#79AFBA] rounded-xl -z-10"></div>
                    ) : (
                      ""
                    )}
                    <div className="absolute top-2  -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0  opacity-0  group-hover:-rotate-6 group-hover:opacity-100 bg-[#79AFBA] rounded-xl -z-10"></div>
                  </div>
                </li>

                <li className="group my-2 xl:my-4 2xl:my-6 relative">
                  <div className="inline-block relative">
                    <a
                      /* rel="noopener"
                      target="_blank" */
                      href="/#services"
                      onClick={() => {
                        setSelectedIndex1(2);
                        setIsOpen(false);
                      }}
                      style={{ fontFamily: "Optima" }}
                    >
                      Services
                    </a>
                    {selecttedIndex1 === 2 ? (
                      <div className="absolute top-2  -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6  opacity-100  group-hover:-rotate-6 group-hover:opacity-100 bg-[#79AFBA] rounded-xl -z-10"></div>
                    ) : (
                      ""
                    )}
                    <div className="absolute top-2  -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0  opacity-0  group-hover:-rotate-6 group-hover:opacity-100 bg-[#79AFBA] rounded-xl -z-10"></div>
                  </div>
                </li>

             

                <li className="group my-2 xl:my-4 2xl:my-6 relative">
                  <div className="inline-block relative">
                    <a
                      // target="blank"
                      href="/pages/contactme"
                      onClick={() => {
                        setSelectedIndex1(3);
                        setIsOpen(false);
                      }}
                      style={{ fontFamily: "Optima" }}
                    >
                      Contact
                    </a>
                    {selecttedIndex1 === 3 ? (
                      <div className="absolute top-2  -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6  opacity-100  group-hover:-rotate-6 group-hover:opacity-100 bg-[#79AFBA] rounded-xl -z-10"></div>
                    ) : (
                      ""
                    )}
                    <div className="absolute top-2  -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0  opacity-0  group-hover:-rotate-6 group-hover:opacity-100 bg-[#79AFBA] rounded-xl -z-10"></div>
                  </div>
                </li>

                <li className="group my-2 xl:my-4 2xl:my-6 relative">
                  <div className="inline-block relative">
                    <a
                      // target="blank"
                       href="/pages/blog"
                      onClick={() => {
                        setSelectedIndex1(5);
                        setIsOpen(false);
                      }}
                      style={{ fontFamily: "Optima" }}
                    >
                      Blog
                    </a>
                    {selecttedIndex1 === 5 ? (
                      <div className="absolute top-2  -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6  opacity-100  group-hover:-rotate-6 group-hover:opacity-100 bg-[#79AFBA] rounded-xl -z-10"></div>
                    ) : (
                      ""
                    )}
                    <div className="absolute top-2  -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0  opacity-0  group-hover:-rotate-6 group-hover:opacity-100 bg-[#79AFBA] rounded-xl -z-10"></div>
                  </div>
                </li>

               
                 <div>
              <img src='/assets/images/EAGlogo.png' alt='eaglogo' className="h-40 md:h-50 mt-10 justify-center items-center"/>
              </div>

              <div className="flex flex-row text-start items-center justify-center mt-5">
          <FaPhone style={{color: 'white'}} />
          <p className="text-2xl lg:text-3xl 2xl:text-4xl relative font-bold text-white mr-100"  style={{ fontFamily: "Optima" }}> &nbsp; 020 8133 5602&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
         
        

              </ul>
            </nav>
           
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
