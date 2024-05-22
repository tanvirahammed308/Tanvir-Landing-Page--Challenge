import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="mx-6 mt-10">
        <div className="block px-20 space-y-4 md:flex justify-between items-center md:px-10">
            <div className="w-full md:w-[350px]">
                <h1 className="text-2xl font-bold"> Eye<span className="text-[#FED29C]">Glass</span></h1>
                <p className="text-[#383838] py-5">Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampde</p>
                <div className="flex space-x-5">
                <CiLinkedin />
                <FaInstagram />
                <FaTwitter />




                </div>
            </div>
            <div className="w-full md:w-[210px]">
                <h2 className="font-bold">Support</h2>
                <ul className="py-2 ">
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Product FAQs</li>
                    <li>Company Support</li>
                    <li>Manage Account</li>
                </ul>
            </div>
            <div className="w-full md:w-[210px]">
            <h2  className="font-bold">Quick Links</h2>
                <ul className="py-2">
                    <li>About Us</li>
                    <li>Blog Post</li>
                    <li>Product Features</li>
                    <li>Company Info</li>
                    <li>Company Info</li>
                </ul>
            </div>
           
        </div>
        <div className="block md:flex md:justify-between items-center my-2">
            <p className="text-[#545454]">Copyright © 2023 All rights reserved by Eyeglass</p>
            <ul className="flex justify-between md:space-x-6 my-2">
                <li  className="text-[#545454]">Privacy Policy</li>
                <li className="text-[#545454] ">Terms of service</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer