import Image from "next/image";
import SideBar from "./SideBar";
import QuantityControl from "./QuantityControl";

export default function ProductCard({ product }) {
  const {
    name,
    category,
    image,
    ratings,
    originalPrice,
    discountedPrice,
    discount,
    weight,
    expiry,
  } = product;

  return (
    <div className="group  rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ">
      {/* Product image */}
      <div className="p-4 overflow-hidden hover:shadow-black/30 duration-200 rounded-md group relative">
        <div className="flex justify-center">
          <Image
            width={500}
            height={500}
            src={image}
            alt={name}
            className="w-60 pt-4 h-40 object-cover rounded-lg"
          />
        </div>
        <span className="text-sm absolute top-5 -left-2  -rotate-45 bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
          {discount}
        </span>
        <SideBar />
      </div>

      {/* Product details */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <span className="text-sm text-gray-600">{category}</span>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-600">({ratings} ratings)</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="line-through text-gray-500 text-sm">
            ${originalPrice.toFixed(2)}
          </span>
          <span className="text-xl font-bold text-gray-900">
            ${discountedPrice.toFixed(2)}
          </span>
        </div>
        <div className="text-sm text-gray-500">Weight: {weight}</div>
        <div className="text-sm text-gray-500">Expiry Date: {expiry}</div>
      </div>
      <QuantityControl />
    </div>
  );
}
