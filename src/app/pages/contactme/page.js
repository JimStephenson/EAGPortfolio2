"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillMail, AiOutlineFieldTime } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa";
// import { Hind } from "next/font/google";
import { ToastClassName, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
}); */

export default function Page() {
  const [state, setState] = useState({
    name: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [key]: value,
    });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    setState({ ...state, phoneNumber: numericValue });
  };

  const clearState = () => {
    setState({
      name: "",
      company: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let data = {
      ...state,
    };
    
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        setLoading(false);
        const response = await res.json();
        if (!response.error) {
          clearState();
          toast(response.message);
        } else {
          clearState();
          toast("something went wrong");
        }
      })
      .catch((e) => {
        setLoading(false);
        clearState();
        toast("something went wrong");
      });
  };

  return (
    <React.Fragment>
       <div
      id="contact" className=" pt-[50px] md:pt-[100px]   h-full md:h-screen   relative ">
      <ToastContainer />
      <div  className="relative bg-[url('/assets/images/blankbackground.png')] h-screen bg-cover  " >
      <div className="flex flex-col items-center justify-center w-full  mt-4">
        <div className=' items-center justify-center  bg-center bg-cover w-[70%]'>
          <div className="items-center justify-center w-full h-full rounded-xl bg-[#395A68] backdrop-brightness-50">
         

            <div className="-mt-[10px]">
              <h1 className="-mt-10 text-3xl lg:text-2xl 2xl:text-3xl text-[#9aabb2] p-5 text-center tracking-wide" style={{ fontFamily: "Optima" }}>
                Got a Problem you need Solving?
              </h1>
            </div>
            {/* <div className="flex justify-center text-center mt-[10px] md:w-[700px]"> */}
              <p className="text-[#9aabb2] lg:text-lg 2xl:text-2xl p-15 mb-10 text-center text-xl" style={{ fontFamily: "Optima" }}>
                We are good at solving problems, and our solutions are top rate.
                Take the first step by contacting us. We are here to help
              </p>
            {/* </div> */}
          </div>
        </div>

       
      </div>

      {/* Contact Form */}
      <div
      
       
        className="flex flex-col md:flex-row justify-center gap-[20px] -mt-10 2xl:mt-20 pb-10 px-[10px]  max-w-[1105px] m-auto p-10 "
      >
        <div
          className="hidden lg:block relative w-[50%] xl:w-[50%] h-[450px] 2xl:h-[500px] rounded-xl md:w-[50%] lg:w-[50%] bg-center bg-cover"
          style={{ backgroundImage: `url('/assets/images/Customer-service.jpeg')` }}
        >
          <div className="absolute h-full w-full bg-gradient-to-t from-[#223740] via-[#223740] shadow-inner opacity-70"></div>
         
        </div>

        {/* FORM */}
        <div className="flex flex-col gap-[5px] p-6 bg-white  border border-gray-200 rounded-lg shadow-md">
          {/* <div className="text-center w-[100px] bg-red-500 py-[1px] tracking-wide uppercase font-300 font-sans text-[14px] text-white rounded-lg">
            Contact Us
          </div> */}
          <div className="">
            <p className="text-[30px] lg:text-[20px] 2xl:text-[30px] text-[#395A68]" style={{ fontFamily: "Optima" }}>
              Request a call back. Feel free to reach out and contact us.
            </p>
          </div>
          <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
            <div
              className="flex flex-col sm:flex-row gap-[20px]"
              style={{ fontFamily: "Optima" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
                value={state.name}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
                onChange={handleChange}
                value={state.company}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
            </div>

            <div
              className="flex flex-col sm:flex-row gap-[20px]"
              style={{ fontFamily: "Optima" }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                value={state.email}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                required
                onChange={handlePhoneChange}
                value={state.phoneNumber}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
                style={{ fontFamily: "Optima" }}
              />
            </div>

            <div style={{ fontFamily: "Optima" }}>
              <textarea
                required
                onChange={handleChange}
                value={state.message}
                name="message"
                placeholder="Your Message..."
                className="px-[12px] h-[180px] w-full outline-none rounded-md py-[5px] flex-1 bg-gray-200"
              />
            </div>
            <div className="flex justify-center items-center text-center">
              {loading && (
                <div className=" ml-5 w-6 h-6 border-t-2 border-blue-600 border-solid animate-spin rounded-full"></div>
              )}
              <button className="bg-[#395A68]  w-full sm:w-auto px-[20px] py-[8px] mb-10 hover:bg-[#223740] transition-colors duration-300 font-semibold rounded-lg text-[#9aabb2]" style={{ fontFamily: "Optima" }}>
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
      </div>
    </React.Fragment>
  );
}