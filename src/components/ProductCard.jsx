import { useContext } from "react";
import { CardContext } from "../providers/CardProvider";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const { setCartItems } = useContext(CardContext);
  const { img, price, name } = product;

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    console.log("Product added to cart:", product);
    toast.success('Item  added Successfully!')

  };

  return (
    <div className="w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow  flex justify-center items-center flex-col">
      <div className="flex-grow">
        <a href="#">
          <img className="rounded-t-lg" src={img} alt={name} />
        </a>
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          ${price}
        </p>
        <button
          onClick={() => handleAddToCart(product)}
          className="border border-black px-2 py-2 font-medium"
        >
          Add to cart
        </button>
      </div>
      
    </div>
  );
};

export default ProductCard;









