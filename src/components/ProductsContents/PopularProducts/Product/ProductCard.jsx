import Image from "next/image";
import SideBar from "./SideBar";
import QuantityControl from "./QuantityControl";

export default function ProductCard({ product }) {
  const {
    name,
    category,
    image,
    rating,
    price,
    discount,
    available,
    exp,
    description,
  } = product;

  return (
    <div className="group rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Product image */}
      <div className="p-4 overflow-hidden hover:shadow-black/30 duration-200 rounded-md group relative">
        <div className="flex justify-center">
          <Image
            width={500}
            height={500}
            src={image}
            alt={name}
            unoptimized
            className="w-60 pt-4 h-40 object-cover rounded-lg"
          />
        </div>
        <div className="absolute top-0 left-0 md:top-0 md:left-1 transform -rotate-12 bg-gradient-to-r from-purple-500 to-indigo-500 text-white w-16 h-16 md:w-24 md:h-24 flex flex-col items-center justify-center rounded-full text-xs md:text-sm font-bold border-4 border-white shadow-lg shadow-purple-300">
          <span className="text-base md:text-lg leading-tight">
            {discount}%
          </span>
          <span className="text-[10px] md:text-xs font-medium uppercase tracking-wide">
            Off
          </span>
        </div>

        <SideBar />
      </div>

      {/* Product details */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <span className="text-sm text-gray-600">{category}</span>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-600">({rating} ratings)</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="line-through text-gray-500 text-sm"></span>
          <span className="text-xl font-bold text-gray-900"></span>
        </div>
        <div className="text-sm text-gray-500">Expiry Date: {exp}</div>
      </div>
      <QuantityControl />
    </div>
  );
}
