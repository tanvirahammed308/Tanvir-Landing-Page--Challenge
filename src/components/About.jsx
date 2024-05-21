import sun from "../../public/sun-1.png"
const About = () => {
  return (
    <div className="block md:flex ">
        <div className="w-full md:w-1/2 bg-[#FED29C] p-10 text-center md:px-36 md:py-36">
            <h2 className="font-bold text-xl w-full md:w-[350px] h-[90px]">Experience clear vision with OptiChroma Vision Frames</h2>
            <div className="w-full md:w-[350px]">

            <small className="text-[#545454]">At OptiChroma, we believe that everyone deserves clear vision and stylish eyewear. That's why we've designed a collection of frames that prioritize both form and function.</small>
            <small className="text-[#545454]">Our team of experts is dedicated to helping you find the perfect pair of glasses.</small>
            </div>
            <div className="mr-0 md:mr-12 mt-5 md:mt-2">

            <button className="bg-[#383838]  py-2 px-3 p-2 rounded-sm">About Us</button>
            </div>
        </div>
        <div className="w-full md:w-1/2">
            <img src={sun} alt="" />
        </div>
    </div>
  )
}

export default About