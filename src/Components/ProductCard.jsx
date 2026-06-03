import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ name, price, image, rating = 4.8 }) => {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-3 transition-all  duration-300 hover:border-orange-500 hover:-translate-y-1">
      {/* Top */}
      <div className="mb-2 flex justify-between">
        <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-semibold text-white">
          New
        </span>

        <Heart
          size={20}
          className="cursor-pointer text-zinc-400 transition hover:text-orange-500"
        />
      </div>

      {/* Product Image */}
      <div className="mb-4 flex justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-44 object-contain transition duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <h3 className="mb-2 text-lg font-semibold text-white">{name}</h3>

      <p className="mb-2 text-xl font-bold text-orange-500">${price}</p>

      {/* Rating + Cart */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-yellow-500">
          <Star size={16} fill="currentColor" />
          <span className="text-sm text-white">{rating}</span>
        </div>

        <Link
          to="/cart"
          className="rounded-lg border border-orange-500 p-2 text-orange-500 transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white"
        >
          <ShoppingCart size={18} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
