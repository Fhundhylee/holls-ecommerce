import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../Components/ProductCard";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === categoryName,
  );

  return (
    <section className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-3 text-4xl font-bold capitalize text-orange-500">
          {categoryName}
        </h1>

        <p className="mb-10 text-zinc-400">
          Browse our {categoryName} collection.
        </p>

        {filteredProducts.length === 0 ? (
          <p className="text-zinc-400">No products found in this category.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
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
        )}

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-orange-500"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
