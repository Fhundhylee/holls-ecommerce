import {Link, useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Product not found.
      </div>
    );
  }

  return (
  <section className="min-h-screen bg-black px-6 py-16 text-white">

    <Link
      to="/"
      className="mb-8 inline-block text-orange-500 transition hover:text-orange-400"
    >
      ← Back to Home
    </Link>
   
      
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[450px] w-full object-contain"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <span className="mb-3 inline-block rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold">
            New Arrival
          </span>

          <h1 className="mb-4 text-4xl font-bold">{product.name}</h1>

          <p className="mb-6 text-3xl font-bold text-orange-500">
            ${product.price}
          </p>

          <p className="mb-8 leading-8 text-zinc-400">{product.description}</p>

          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="rounded-lg bg-orange-500 px-8 py-3 font-semibold transition hover:bg-orange-600"
            >
              Add to Cart
            </button>

            <button className="rounded-lg border border-zinc-700 px-8 py-3 font-semibold transition hover:border-orange-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
