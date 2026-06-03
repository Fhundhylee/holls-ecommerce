import ProductCard from "./ProductCard";

import watch from "../assets/images/watch.png";
import headset from "../assets/images/headset.png";
import camera from "../assets/images/canon.png";
import nike from "../assets/images/nike.png";
import blender from "../assets/images/blender.png";
import iphone from "../assets/images/iphone.png";

const products = [
  {
    name: "Apple Watch Series 10",
    price: "599",
    image: watch,
  },
  {
    name: "Sony WH-1000XM6",
    price: "449",
    image: headset,
  },
  {
    name: "Canon EOS R8",
    price: "1499",
    image: camera,
  },
  {
    name: "Nike Air Force 1",
    price: "140",
    image: nike,
  },
  {
    name: "KitchenAid Mixer",
    price: "399",
    image: blender,
  },
  {
    name: "iPhone 16 Pro Max",
    price: "1299",
    image: iphone,
  },
];

const ProductGrid = () => {
  return (
    <section className="bg-black px-6 pb-16 pt-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Products</h2>

          <button className="text-orange-500 transition hover:text-orange-400">
            View all products →
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
