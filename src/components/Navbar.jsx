import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useContext, useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { CardContext } from "../providers/CardProvider";



const Navbar = () => {
  const {cartItems}=useContext(CardContext)
    const [menuIcon,setMenuIcon]=useState(false);
    const handleMenuToggle=()=>{
        setMenuIcon(!menuIcon)
    }
  return (
    <header>
      <nav className="flex justify-between items-center p-2 mx-3 my-3">
        <div>
          <li className="list-none">
            <a href="#" className="text-4xl font-bold">
              Eye<span className="text-[#FED29C]">Glass</span>
            </a>
          </li>
        </div>
        {/* for large screen start */}
        <div className="hidden md:flex">
          <ul className="flex items-center space-x-3">
            <li>
              <a href="#" className="text-xl">Home</a>
            </li>
            <li>
              <a href="#" className="text-xl">About Us</a>
            </li>
            <li>
              <a href="#" className="text-xl">Products</a>
            </li>
            <li>
              <a href="#" className="text-xl">Features</a>
            </li>
            <li>
              <a href="#" className="text-xl">Reviews</a>
            </li>
           
            <li>
              <a href="#" className="text-xl">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
          <FaCartShopping size={30} />
          <div>

          {
            cartItems?.length ? <span className="absolute bottom-6 -right-5 bg-red-500 px-3 py-1 rounded-full">{cartItems?.length}</span>:""
          }
          </div>

         

          </div>
          <FaUser  size={30}/>
        </div>
        {/* -----------large screen end------------ */}

        {/* ------------for small screen start--------------- */}
        {/* -------for icon toggle---------- */}
        <div className="flex md:hidden relative" onClick={handleMenuToggle}>
            {
                menuIcon ?  <IoMdClose  size={25}/>
                :<MdMenu size={25}/>

            }

<div >
{/* // w-[150px] bg-white shadow-md  top-8 right-0 p-5 */}
    {
        menuIcon && <div  className="absolute top-10 -left-32 md:right-2 w-48 p-2
        
       rounded-md z-10
        
         bg-[#EAEAEA] text-black ease-in duration-300
        
        ">
        <ul className="text-center space-y-2">
        <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">total cartItems:{cartItems.length}</a>
            </li>
            

        </ul>
        
        </div>
    }
</div>
        </div>

        {/* -------------------small screen end----------------- */}
      </nav>
    </header>
  );
};

export default Navbar;
