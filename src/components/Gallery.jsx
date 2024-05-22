import "../components/style.css"
const Gallery = () => {
  return (
    <div className="my-24 mx-auto block md:flex gap-3 w-[350px]  md:w-[800px]  ">
        {/* left-side  */}
        <div className='w-full md:w-1/2 '>
            
            <div className="g1 relative w-full mx-0 md:mx-12  md:w-[350px]  h-[350px] ">
                <div className="bg-white absolute bottom-6 py-2 px-14 mx-5 rounded-[5px] items-center">
                    <h1 className="font-bold text-[#383838] mx-8">Bravo Sunglasses</h1>
                    <h5 className="text-[#383838]">Up to 80% off on selected item</h5>
                    <div className="mx-14">

                    <button className="text-white bg-[#383838] px-1 py-1 rounded ">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="g3 relative w-full md:w-[360px] md:mx-11  h-[250px]  mt-2">
            <div className="bg-white absolute bottom-6 py-2 px-14 mx-5 rounded-[5px] items-center">
                    <h1 className="font-bold text-[#383838] mx-8">John Jacobs</h1>
                    <h5 className="text-[#383838]">Up to 40% off on selected item</h5>
                    <div className="mx-14">

                    <button className="text-white bg-[#383838] px-1 py-1 rounded ">Buy Now</button>
                    </div>
                </div>
            </div>
            
        </div>
        {/* right-side  */}
        <div className='w-full md:w-1/2   '>
        <div className="g2 relative w-full  md:w-[300px] h-[300px] mt-2 md:mt-0">
        <div className="bg-white absolute bottom-6 py-2 px-14 mx-5 rounded-[5px] items-center">
                    <h1 className="font-bold text-[#383838] ">Tommy Hilfiger</h1>
                    <h5 className="text-[#383838]">Up to 30% off on selected item</h5>
                    <div className="mx-8">

                    <button className="text-white bg-[#383838] px-1 py-1 rounded ">Buy Now</button>
                    </div>
                </div>
        </div>
            <div className="g4 relative w-full md:w-[300px] h-[300px]  mt-2">
            <div className="bg-white absolute bottom-1 py-2 px-14 mx-5 rounded-[5px] items-center">
                    <h1 className="font-bold text-[#383838] ">Vincent Chase</h1>
                    <h5 className="text-[#383838]">Up to 10% off on selected item</h5>
                    <div className="mx-8">

                    <button className="text-white bg-[#383838] px-1 py-1 rounded ">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Gallery