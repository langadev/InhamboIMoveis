import { HeartIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { FaBed, FaShower } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard({ url, alt, price, description, quartos, banheiros }) {
 
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm ">
     
      <div className="relative">
        <img className="h-60 w-full object-cover" src={url} alt={alt} />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <HeartIcon className="h-6 w-6 text-red-500" />
        </button>
      </div>

     
      <div className="p-4">
     
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-bold text-gray-800">
            ${price.toLocaleString()}
          </span>
          <button className="bg-blue-500 p-1 text-white text-center rounded-md border-blue-500 border-2  hover:bg-blue-600 ">
            <Link to={'/desc'}> Detalhes</Link>
          </button>
        </div>

  
        <p className="text-sm text-gray-600 mb-3">{description}</p>

        
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          
          <div className="flex items-center space-x-2">
           <FaBed/>
            <span>
              <strong>{quartos}</strong> {quartos === 1 ? "Quarto" : "Quartos"}
            </span>
          </div>
       
          <div className="flex items-center space-x-2">
            <FaShower/>
            <span>
              <strong>{banheiros}</strong>{" "}
              {banheiros === 1 ? "Banheiro" : "Banheiros"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
