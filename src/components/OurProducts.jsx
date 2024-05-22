import { useEffect, useState } from "react";
import Tabs from "./Tabs";
import productsData from "../productData/ProductsData";
import ProductCard from "./ProductCard";

const OurProducts = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    setProducts(productsData)
  },[])
  return (
    <div className="mx-0 md:mx-10  my-5 p-5">
      <div className="">
        <h1 className="text-[#383838] font-bold text-2xl">Our Products</h1>
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="">
            <p className="text-[#545454]">
              <small>
                Experience crystal clear vision and elevated style with our
                premium collection of eyeglasses.
              </small>
            </p>
          </div>
          <div className=" mt-5 md:mt-0 ">
            <Tabs />
          </div>
        </div>
      </div>
      <div className="my-5">
       
        <div className="grid md:grid-cols-3 gap-3">
          {
            products.map((product)=><ProductCard key={product.id} product={product}></ProductCard>)
          }

        </div>
      </div>
    </div>
  );
};

export default OurProducts;
