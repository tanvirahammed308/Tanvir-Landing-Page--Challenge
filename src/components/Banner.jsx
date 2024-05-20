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
    <div className="flex justify-center items-center bg-[#EAEAEA] relative mb-40">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={10000}
        className="bg "
      >
        <div className="w-[250px]  mx-36  md:mx-[550px]">
          <img src="/b1.png" alt="Slide 1" />
        </div>
        <div className="w-[250px] mx-36  md:mx-[550px]">
          <img src="/b1.png" alt="Slide 1" />
        </div>
        <div className="w-[250px] mx-36  md:mx-[550px]">
          <img src="/b1.png" alt="Slide 1" />
        </div>
      </Carousel>
      <div className="w-[100px] md:w-[250px] absolute right-[330px] md:right-[730px] ">
        <h2 className="text-xl font-bold">Personalized Eyeglass Shopping</h2>
        <button className="flex items-center md:gap-2 bg-[#383838] py-2 px-2 rounded-sm text-white my-3">
          <BsCart2 />

          Buy Now
        </button>
      </div>
      <div className="flex gap-5 md:gap-10 absolute -bottom-32  md:-bottom-20 ">
        <div className="w-[100px] md:w-[250px] items-center ">
        <div className="bg-[#FED29C] mx-4 md:mx-10 w-[50px] border-radius p-5 rounded-full">
        <CiSearch />


        </div>
        <div>

        <h5 className="text-[#383838]">Search you sunglass</h5>
        <small className="text-[#545454]">Shop Stylish Eyewear Now</small>
        </div>

        </div>
        <div className="w-[100px] md:w-[250px] items-center">
        <div className="bg-[#FED29C] mx-1 md:mx-5 w-[50px] border-radius p-5 rounded-full">
        <CiBookmarkCheck />



        </div>
        <div>

        <h5 className="text-[#383838]">Select Sunglass </h5>
        <small className="text-[#545454]">Shade Your Style</small>
        </div>

        </div>
        <div className="w-[100px] md:w-[250px] items-center">
        <div className="bg-[#FED29C] mx-0 md:mx-5 w-[50px] border-radius p-5 rounded-full">
        <FaCcAmazonPay />


        </div>
        <div>

        <h5 className="text-[#383838]">Make Payment</h5>
        <small className="text-[#545454]">Securely Checkout Now</small>
        </div>

        </div>
        <div className="w-[100px] md:w-[250px] items-center">
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
