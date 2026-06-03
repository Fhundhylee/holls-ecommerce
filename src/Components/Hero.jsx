import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col px-6 items-center justify-between lg:flex-row">
        {/* Left Side */}
        <div className="max-w-2xl">
          <p className="mb-6 inline-block rounded-full border border-orange-500 px-4 py-2 text-sm text-orange-500">
            NEW COLLECTION
          </p>

          <h1 className="mb-6 text-6xl font-extrabold leading-tight">
            SHOP MORE.
            <br />
            LIVE <span className="text-orange-500">BETTER.</span>
          </h1>

          <p className="mb-8 text-lg text-zinc-400">
            Discover premium gadgets, stylish fashion and quality kitchenware
            all in one place.
          </p>

          <div className="flex gap-4">
            <Link
              to="/products"
              className="rounded-lg bg-orange-500 px-6 py-3 font-semibold hover:bg-orange-600"
            >
              Shop Now
            </Link>

            <Link
              to="/products"
              className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold hover:border-orange-500"
            >
              Explore
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-orange-500/10 blur-3xl"></div>

          <img
            src={heroImage}
            alt="HOLLS Products"
            className="relative  w-full max-w-[750px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
