import products from "../data/products";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";

const Deals = () => {
  const dealProducts = products.filter((product) => product.isDeal);

  return (
    <section className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-3 text-4xl font-bold text-orange-500">
          Deals & Discounts
        </h1>

        <p className="mb-10 text-zinc-400">
          Grab our hottest deals before they're gone.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dealProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-orange-500"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Deals;
