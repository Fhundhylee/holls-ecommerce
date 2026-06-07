import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-black/70 backdrop-blur-xl text-white">
      {/* First Row */}
      <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto whitespace-nowrap px-6 py-3 text-sm font-medium scrollbar-hide">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="HOLLS Logo" className="h-16 w-auto  md:h-25" />
        </Link>

        {/* Search */}
        <div className="hidden w-1/3 md:flex">
          <div className="flex w-full overflow-hidden rounded-lg border border-zinc-700">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-zinc-900 px-4 py-2 outline-none"
            />
            <button className="bg-orange-500 px-4">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/" className="transition hover:text-orange-500">
            Products
          </Link>

          <Link to="/login" className="transition hover:text-orange-500">
            <User />
          </Link>

          <Link
            to="/cart"
            className="relative transition hover:text-orange-500"
          >
            <ShoppingCart />
            <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-1 text-xs">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>

      {/* Second Row */}

      <div className="border-t border-zinc-800 overflow-x-auto scrollbar-hide">
        <div className="flex w-max items-center gap-8 px-6 py-3 text-sm font-medium">
          <Link
            to="/"
            className="shrink-0 border-b-2 border-orange-500 pb-1 text-orange-500 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/category/gadgets"
            className="shrink-0 border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
          >
            Gadgets
          </Link>

          <Link
            to="/category/fashion"
            className="shrink-0 border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
          >
            Fashion
          </Link>

          <Link
            to="/category/kitchenware"
            className="shrink-0 border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
          >
            Kitchenware
          </Link>

          <Link
            to="/deals"
            className="shrink-0 border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
          >
            Deals
          </Link>

          <Link
            to="/new-arrivals"
            className="shrink-0 border-b-2 border-transparent pb-1 transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
          >
            New Arrivals
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
