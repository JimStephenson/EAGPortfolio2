import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <AiOutlineArrowLeft className="arrows" style={{color:"white"}}/>
    </div>
  )
  }

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <AiOutlineArrowRight className="arrows" style={{color:"white"}}/>
    </div>
  )
}

export const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 6000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    loop: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow to="next"/>,
    prevArrow: <SamplePrevArrow to="prev" />,
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // this comtains the data we are gonna for AboutMe component and slider component 

export const AboutData = [
  {
    count: 1,
    title: "Comprehensive Accounting",
    img: "/assets/images/first.svg",
    link: "/pages/comprehensive",
    description: "This all-encompassing service includes setting up general ledgers, handling monthly financial activities, managing assets, and ensuring compliance through end-of-month and year statutory requirements.",
    array: [
      "Set up", 
      "Capture and Recon", 
      "Purchases and Creditors", 
      "Invoices and Payments", 
      "Journals", 
      "Asset Register", 
      "Month End", 
      "VAT & PAYE", 
      "Year End, - Invoicing and Collections",
    ],
  },
  {
    count: 2,
    title: "Payroll Management",
    img: "/assets/images/second.svg",
    link: "/pages/payroll",
    description: "Manages all aspects of payroll, from processing to benefits management, ensuring accuracy and compliance with regulations.",
    array: [
      "Payroll Processing", 
      "Pension Contributions", 
      "Benefits Management",
    ],
  },
 {
    count: 3,
    title: "Private Wealth Accounting",
    img: "/assets/images/fourth.svg",
    link: "/pages/private",
    description: "Specialized accounting services tailored for high net worth individuals, focusing on real estate management and investment oversight.",
    array: [
      "HNW Family Office Accounting", 
      "Real Estate Bookkeeping", 
      "Investment Tracking",
    ],
  },
  {
    count: 4,
    title: "Performance Insights",
    img: "/assets/images/fifth.svg",
    link: "/pages/performance",
    description: "Provides custom reports and detailed analysis of key performance indicators to support strategic business decisions.",
    array: [
      "Custom Financial Reports", 
      "KPI Tracking and Analysis",
    ],
  },
  {
    count: 5,
    title: "Risk & Recovery Planning",
    img: "/assets/images/sisxth.svg",
    link: "/pages/risk",
    description: "Focuses on identifying financial risks and planning for disaster recovery to ensure resilience and continuity.",
    array: [
      "Risk Assessment", 
      "Disaster Recovery Planning",
    ],
  },
  {
    count: 6,
    title: "Strategic Advisory",
    img: "/assets/images/third.svg",
    link: "/pages/strategic",
    description: "Offers strategic advice on business growth, cost management, and financial planning to enhance business efficiency and profitability.",
    array: [
      "Business Advisory", 
      "Financial Strategy Development",
    ],
  },
 {
    count: 7,
    title: "Business Website Development",
    img: "/assets/images/sisxth.svg",
    link: "/pages/website",
    description: "",
    array: [
     "Personalised website development"
    ],
  },
];


// this is for the slider 
export const DataArray = [
  {
    title: "Personal Portfolio Website Using Reactjs",
    name: "Ultimate ReactJs portfolio",
    des: "I have made this project in 2022  to show thousands of students all over the world  how to make Reactjs portfolio.",
    des1: "This project was made using, Ractjs, Nextjs, Expressjs, Nodejs, Rxjs Bootsrap and many more!",
    images: ["/reactportfolio.png", "/2.webp", "/3.webp", "/4.webp"],
  },
  {
    title: "Management Consulting Company Web Design",
    name: "edubaba Management Consultants",
    des: "We buit this project for edubaba  Management Consultants.",
    des1: "",

    images: ["/hotel01.png", ],
  },
  {
    title: "Food Delivery Company WebSite",
    name: "Yum Food Company",
    des: "We did  this project for Yum Foods Located in USA.",
    des1: "This website's graphic design is fantastic. Animated sliders are painstakingly built and created in WordPress with Revolution Slider. All of the product photos are photo manipulations created in Adobe Photoshop.",

    images: ["/yumfood.jpg", "/yumfood2.png"],
  },
  {
    title: "Real Estate and Property Management Project",
    name: "Inans Property Management ",
    des: "We built this project for inans group LTD",
    des1: "Aside from its gorgeous design, this website is backed by an outstanding plugin that allows owners and agencies to simply display different properties in the neighbourhood and create an online showcase in an appealing manner for home buyers and tenants..",

    images: ["/property1.png"],
  },
  {
    title: "Crypto Trading Website",
    name: "Crypto Trading project",
    des: "We buit this website for BigMoney group",
    des1: "This project was built to enable clients all over the world to buy and sell their crypto.",

    images: ["/crypto5.png", "/crypto3.png", "/crypto1.png"],
  },
];
