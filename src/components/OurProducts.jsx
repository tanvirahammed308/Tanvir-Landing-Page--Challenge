import Tabs from "./Tabs"

const OurProducts = () => {
  return (
    <div className="mx-16 bg-red-200 my-5 p-5">
        <div>
            <h1 className="text-[#383838] font-bold">Our Products</h1>
            <div>
                <p className="text-[#545454]"><small>Experience crystal clear vision and elevated style with our premium collection of eyeglasses.
                </small></p>
                <Tabs/>

            </div>
           
        </div>
    </div>
  )
}

export default OurProducts