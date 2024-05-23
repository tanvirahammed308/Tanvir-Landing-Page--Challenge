import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import "./Banner.css";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaCcAmazonPay } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const Banner = () => {
  return (
    <div className="flex justify-center items-center  w-full h-[350px]  md:[400px] md:h-[490px] bg-[#EAEAEA] relative md:mb-40 mb-56 ">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={10000}
        className="p-5 md:p-5 w-[350px] h-[350px] md:w-[460px]  md:h-[460px] bg    md:mt-7"
      >
        <div className=" mt-12  ">
          <img src="/b1.png" alt="Slide 1" className="" />
        </div>
        <div className="mt-12 ">
          <img src="/b1.png" alt="Slide 1" className="" />
        </div>
        <div className="mt-12  ">
          <img src="/b1.png" alt="Slide 1" className="" />
        </div>
      </Carousel>
      <div className="w-[100px] md:w-[250px] absolute top-[130px] md:top-[180px] right-[250px] md:right-[750px] ">
        <h2 className="text-sm md:text-xl font-bold">
          Personalized Eyeglass Shopping
        </h2>
        <button className="flex items-center gap-1 md:gap-2 bg-[#383838] py-2 px-2 rounded-sm text-white my-3 ">
          <BsCart2 />
          Buy Now
        </button>
      </div>
      <div className="flex md:flex gap-5 md:gap-10 absolute -bottom-52  md:-bottom-20 ">
        <div className="w-[75px] md:w-[250px] items-center ">
          <div className="bg-[#FED29C] mx-3 md:mx-10 w-[50px] border-radius p-5 rounded-full">
            <CiSearch />
          </div>
          <div className="px-5">
            <h5 className="text-[#383838]">Search you sunglass</h5>
            <small className="text-[#545454]">Shop Stylish Eyewear Now</small>
          </div>
        </div>
        <div className="w-[75px] md:w-[250px] items-center">
          <div className="bg-[#FED29C] mx-1 md:mx-5 w-[50px] border-radius p-5 rounded-full">
            <CiBookmarkCheck />
          </div>
          <div>
            <h5 className="text-[#383838]">Select Sunglass </h5>
            <small className="text-[#545454]">Shade Your Style</small>
          </div>
        </div>
        <div className="w-[75px] md:w-[250px] items-center">
          <div className="bg-[#FED29C] mx-0 md:mx-5 w-[50px] border-radius p-5 rounded-full">
            <FaCcAmazonPay />
          </div>
          <div>
            <h5 className="text-[#383838]">Make Payment</h5>
            <small className="text-[#545454]">Securely Checkout Now</small>
          </div>
        </div>
        <div className="w-[75px] md:w-[250px] items-center">
          <div className="bg-[#FED29C]  mx-0 md:mx-5 w-[50px] border-radius p-5 rounded-full">
            <TbTruckDelivery />
          </div>
          <div>
            <h5 className="text-[#383838]">Received Product </h5>
            <small className="text-[#545454]">See the World Clearly</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
