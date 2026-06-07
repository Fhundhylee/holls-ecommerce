import ProductCard from "./ProductCard";
import products from "../data/products";
import { Link } from "react-router-dom";

const ProductGrid = () => {
  return (
    <section className="bg-black px-6 pb-16 pt-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Products</h2>

          <Link
            to="/products"
            className="text-orange-500 transition hover:text-orange-400"
          >
            View all products →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
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
