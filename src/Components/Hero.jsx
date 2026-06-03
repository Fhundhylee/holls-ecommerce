import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  const slides = [
    {
      title1: "SHOP MORE.",
      title2: "LIVE BETTER.",
      description:
        "Discover premium gadgets, stylish fashion and quality kitchenware all in one place.",
      image: heroImage,
    },

    {
      title1: "DISCOVER.",
      title2: "NEW ARRIVALS.",
      description:
        "Explore the latest products carefully selected for modern lifestyles.",
      image: heroImage,
    },

    {
      title1: "QUALITY.",
      title2: "YOU DESERVE.",
      description:
        "Premium products and trusted brands delivered right to your doorstep.",
      image: heroImage,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between overflow-hidden px-6 lg:flex-row">
        {/* Left Side */}
        <div className="max-w-2xl w-full">
          <p className="mb-6 inline-block rounded-full border border-orange-500 px-4 py-2 text-sm text-orange-500">
            NEW COLLECTION
          </p>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight lg:text-7xl">
            {slides[currentSlide].title1}
            <br />
            <span className="text-orange-500">
              {slides[currentSlide].title2}
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-zinc-400">
            {slides[currentSlide].description}
          </p>

          <div className="flex gap-4">
            <Link
              to="/products"
              className="rounded-lg bg-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-600"
            >
              Shop Now
            </Link>

            <Link
              to="/products"
              className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold transition hover:border-orange-500"
            >
              Explore
            </Link>
          </div>

          {/* Slider Indicators */}
          <div className="mt-10 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-10 bg-orange-500"
                    : "w-5 bg-zinc-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="relative mt-10 lg:mt-0">
          <div className="absolute inset-0 rounded-full bg-orange-500/10 blur-3xl"></div>

          <img
            src={slides[currentSlide].image}
            alt="Hero"
            className="relative w-full max-w-md lg:max-w-[750px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
