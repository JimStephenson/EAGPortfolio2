import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./Testimonial.css";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <AiOutlineArrowLeft className="arrows" style={{color:"#395A68"}}/>
    </div>
  )
  }

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <AiOutlineArrowRight className="arrows" style={{color:"#395A68"}}/>
    </div>
  )
}



export default function TestimonialComponent() {

  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 6000,
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "15px",
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow to="next"/>,
    prevArrow: <SamplePrevArrow to="prev" />,
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <React.Fragment>
    <div
      id="testimonial"
      // className=" pt-[250px] mt-4  pb-[100px] lg:pb-[600px] relative lg:h-[800px]"
      className=" pt-[50px] md:pt-[150px] hidden md:hidden lg:block  h-fit md:h-screen   relative "
    >
      <div className="container m-auto mb-30 ">
        {/* <h1 className="text-[200px] w-[80%] overflow-hidden absolute lg:left-40 md:left-30 -top-[-50px] z-0 text-[#EAF7FC]">
          Blogs
        </h1> */}
        <p className="relative font-bold  text-5xl lg:text-4xl text-center text-[#395A68] -mt-10 " style={{ fontFamily: "Optima" }}>
          Testimonials
        </p>
        <div
        className="bg-[#E0F3FB] mt-10 max-h-[450px] py-12 lg:px-12 md:px-5 px-3 rounded-lg  pt-[150px] lg:pt-[50px] "
        style={{
          backgroundImage:
            "linear-gradient(-62deg, #395A68 0 50%, #395A68 0% 100%)",
          width: "100%",
        }}
      >
        <div className="lg:container mx-auto   px-0 sm:max-h-[350px]">
          <div className="text-center">

        <div className="lg:container mx-auto   px-0 sm:max-h-[350px]">
          <div className="text-center">
            <h2 className=" text-5xl lg:text-4xl mb-6 text-[#9aabb2]" style={{ fontFamily: "Optima" }}>
              What our clients are saying
            </h2>
            <p
              className="max-w-2xl font-[200] text-[#9aabb2] mx-auto mb-12 lg:mb-12 2xl:mb-24" style={{ fontFamily: "Optima" }}
            >
              Read what our clients are saying about how we helped them make a
              difference in their lives.
            </p>
          </div>
          {/* <Slider {...settings} className="cursor-all-scroll"> */}
          <Slider {...settings} >

            
<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5  p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"
  
  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68] min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
          &quot;Lee&apos;s duties included a range of financial support in as
          far as the company bookkeeping requirements and the
          compilation of management accounts for subsidiary
          companies. Her role required her to liaise with our
          accounting officers, suppliers and take responsibility for
          all the companies related accounting matters With the
          continued growth of the company the financial
          infrastructure and company management involved Lee as part
          of the key management team. Her excellent grasp of our
          company needs and Client expectations meant that she was
          able to offer not only the accounting function, but also
          management support.&quot;
        </p>
      </div>
    </div>
  </div>
</div>

<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5  p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"
 
  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68] min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
          &quot;Lee worked for our Company from September 2012 until June
          2013 in the position of Finance Manager. She has been
          responsible for all finance functions within the company
          and for managing the finance department, ensuring all
          department KPI s are met. While with the company she very
          successfully implemented the change to Sage Accounting
          being responsible for the set up Sage 50 accounts and
          Payroll and for the transfer of data from our old system.
          Lee has always worked hard and diligently and has gained
          the respect and friendship of her department and other
          staff. I am very happy to commend her to any future
          employer.&quot;
        </p>
      </div>
    </div>
  </div>
</div>

<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5  p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"
   
  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68] min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
         &quot;Lee joined our Company as Finance and Administration Manager, and right from the start displayed enthusiasm and commitment to the Company. Not afraid to muck in, Lee coped with the initial  finance  set up and many administration jobs at the same time.&quot;
        </p>
      </div>
    </div>
  </div>
</div>

<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5 p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"
 
  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68] min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
          &quot;Her work was accurate, timely and neatly presented. Very good communication skills, both internal and external. Resourceful and enjoyable to work with.&quot;
        </p>
      </div>
    </div>
  </div>
</div>

<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5  p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"
 
  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68] min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
         &quot;I am delighted to confirm that Lee has been a great asset to our company since joining as Accounts Manager in July 2013. For the past two years the senior management of our have been reassured by her highly competent performance within the accounts department and confident that the management of the company financial records has been in safe hands.&quot;
        </p>
      </div>
    </div>
  </div>
</div>

<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5  p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"

  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68] min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
         &quot;We are genuinely sad that Lee has decided to Leave Laps in order to pursue a new opportunity and our loss will surely be her new employer&apos;s gain.&quot;
        </p>
      </div>
    </div>
  </div>
</div>

<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5  p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"
  
  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68] min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
         &quot;Lee has been a pleasure to work with and has also spoken up when she has felt strongly that when she has constructive input to help move the company forward. She has had an excellent attendance record and have found her to be completely honest and trustworthy.&quot;
        </p>
      </div>
    </div>
  </div>
</div>

<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5  p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"
 
  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68] min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
         &quot;I would have no hesitation in recommending her to a position of trust and responsibility.&quot;
        </p>
      </div>
    </div>
  </div>
</div>

<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5  p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"
 
  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68] min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
          &quot;Lee has been our Freelance Bookkeeper and Accountant from 1997 until 2011. She was responsible for - Monthly accounting, Vat calculations and payments,  Salary calculations, paye deductions and payments and year end on-line returns., Production of monthly Management Accounts, Preparation of Annual Statuary Accounts for Audit and liaison  with Auditors. She is loyal, hardworking and a person of integrity and will undoubtedly be an asset to anyone who is fortunate enough to employ her.&quot;
        </p>
      </div>
    </div>
  </div>
</div>

<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5  p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"
  
  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68] min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
         &quot;Lee joined our Company as Finance and Administration Manager, and right from the start displayed enthusiasm and commitment to the Company. Not afraid to muck in, Lee coped with the initial  finance  set up and many administration jobs at the same time.&quot;
        </p>
      </div>
    </div>
  </div>
</div>

<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5 p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"
 
  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68] min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
        &quot;Her work was accurate, timely and neatly presented. Very good communication skills, both internal and external. Resourceful and enjoyable to work with.&quot;
        </p>
      </div>
    </div>
  </div>
</div>

<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5 p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"
 
  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68] min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
         &quot;Shelly played a key roll in the implementation of a new
          Oracle based Accounting System, where she assisted in the
          reconciliation, conversion and clean up of approximately
          400 accounts. Shelly has proved herself to be an honest
          and trusworthy employee and has been a committed and
          valued member of the Finance Department.&quot;
        </p>
      </div>
    </div>
  </div>
</div>







{/*copy and paste  it as many times as you  like
Render  the componanet within parant page.tsx
*/}

<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5  p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"
 
  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68]  min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
          &quot;I would rehire Shelly without question, she was a great
          asset to the finance team and the company in general and
          would have continued to add value to the AFC role.&quot;
        </p>
      </div>
    </div>
  </div>
</div>

<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5 p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"
 
  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68] min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
          &quot;Shelly is an extremely well rounded indiviual who&apos;s role
          as AFC demanded her to work independantly and was a
          proactive team leader in several of our Business Plan
          projects, Shelly consistantly delivered on both levels as
          she has the aptitude to continually think outside the box
          and tackle problems and issues with clear approach and
          consider all options available to her.&quot;
        </p>
      </div>
    </div>
  </div>
</div>

<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5 p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"
 
  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68] min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
         &quot;Shelly met all deadlines without fail and managed any
          stressful situations in a professional manner. Her work
          was always accurate, with excellent attention to detail.&quot;
        </p>
      </div>
    </div>
  </div>
</div>

<div className="slider-card flex" style={{ paddingLeft: "0px" }}>
  <div
    className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5 p-4 lg:p-6 min-h-[250px]swiper-slide-active border border-gray-600 bg-white rounded-xl shadow-xl"
 
  >
    <div className=" flex">
      <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
        <p
          className="mb-6 font-[200] text-[#395A68] min-h-[70px] text-[15px] mt-3" style={{ fontFamily: "Optima" }}
        >
        &quot;Shelly contributed over and above what I would have
          expected from an employee, and it&apos;s appreciated at a
          personal level as well as professional. She will be sorely
          missed!&quot;
        </p>
      </div>
    </div>
  </div>
</div>






</Slider>

          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </React.Fragment>
  )
}