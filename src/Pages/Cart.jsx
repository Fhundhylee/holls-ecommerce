import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <section className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-orange-500">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-zinc-400">Your cart is currently empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center gap-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 md:flex-row"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 w-32 object-contain"
                  />

                  {/* Details */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-semibold">{item.name}</h2>

                    <p className="mt-2 text-xl font-bold text-orange-500">
                      ${item.price}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="rounded-lg border border-zinc-700 px-3 py-1 transition hover:border-orange-500"
                    >
                      -
                    </button>

                    <span className="w-8 text-center text-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="rounded-lg border border-zinc-700 px-3 py-1 transition hover:border-orange-500"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="rounded-lg border border-red-500 px-4 py-2 text-red-500 transition hover:bg-red-500 hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <h2 className="text-2xl font-bold">
                  Total:
                  <span className="ml-2 text-orange-500">${total}</span>
                </h2>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/"
                    className="rounded-lg border border-zinc-700 px-6 py-3 text-center transition hover:border-orange-500"
                  >
                    Continue Shopping
                  </Link>

                  <Link
                    to="/checkout"
                    className="rounded-lg bg-orange-500 px-6 py-3 text-center font-semibold transition hover:bg-orange-600"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-zinc-400">
              <Link
                to="/"
                className="mb-8 inline-flex items-center gap-2 text-zinc-400 transition hover:text-orange-500"
              >
                ← Back to Home
              </Link>
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
