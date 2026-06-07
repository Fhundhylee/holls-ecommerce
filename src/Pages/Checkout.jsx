import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
  });

  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setFormData({
        ...formData,
        phone: value.replace(/\D/g, "").slice(0, 11),
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, phone, city, address } = formData;

    if (
      !fullName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !city.trim() ||
      !address.trim()
    ) {
      setMessage({
        text: "Please fill in all fields.",
        type: "error",
      });
      return;
    }

    if (!email.includes("@")) {
      setMessage({
        text: "Please enter a valid email address.",
        type: "error",
      });
      return;
    }

    if (!/^\d{11}$/.test(phone)) {
      setMessage({
        text: "Phone number must contain exactly 11 digits.",
        type: "error",
      });
      return;
    }

    setMessage({
      text: "🎉 Order placed successfully!",
      type: "success",
    });

    clearCart();

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      address: "",
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-6 py-16 text-white">
      {/* Background Glow */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>

      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        <h1 className="mb-2 text-4xl font-bold text-orange-500">Checkout</h1>

        <p className="mb-8 text-zinc-400">
          Please fill in your details and confirm your order.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-3">
          {/* Customer Card */}

          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:col-span-2">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-white/10 via-transparent to-orange-500/10"></div>

            <div className="relative z-10">
              <h2 className="mb-6 text-2xl font-semibold">
                Customer Information
              </h2>

              {message.text && (
                <div
                  className={`mb-6 rounded-xl border px-4 py-3 text-center font-medium backdrop-blur-md ${
                    message.type === "success"
                      ? "border-green-500/30 bg-green-500/10 text-green-300"
                      : "border-red-500/30 bg-red-500/10 text-red-300"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none backdrop-blur-sm transition focus:border-orange-500"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none backdrop-blur-sm transition focus:border-orange-500"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none backdrop-blur-sm transition focus:border-orange-500"
                />

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none backdrop-blur-sm transition focus:border-orange-500"
                />
              </div>

              <textarea
                rows="4"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Delivery Address"
                className="mt-5 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none backdrop-blur-sm transition focus:border-orange-500"
              ></textarea>
            </div>
          </div>

          {/* Order Summary */}

          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/[0.07] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-white/10 via-transparent to-orange-500/10"></div>

            <div className="relative z-10">
              <h2 className="mb-6 text-2xl font-semibold">Order Summary</h2>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="mb-3 flex justify-between text-sm"
                >
                  <span className="text-zinc-400">
                    {item.name} × {item.quantity}
                  </span>

                  <span className="font-medium">
                    ${item.price * item.quantity}
                  </span>
                </div>
              ))}

              <div className="mb-4 mt-6 flex justify-between border-t border-white/10 pt-4">
                <span className="text-zinc-400">Subtotal</span>
                <span>${total}</span>
              </div>

              <div className="mb-4 flex justify-between">
                <span className="text-zinc-400">Shipping</span>
                <span>Free</span>
              </div>

              <hr className="my-6 border-white/10" />

              <div className="mb-8 flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span className="text-orange-500">${total}</span>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-orange-500 py-3 font-semibold transition hover:bg-orange-600"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>

        {/* Bottom Features */}

        <div className="relative mt-10 grid gap-4 overflow-hidden rounded-3xl border border-white/20 bg-white/[0.07] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-orange-500/10"></div>

          <div className="relative z-10 text-center">
            <h3 className="font-semibold text-orange-500">Secure Payment</h3>
            <p className="mt-2 text-sm text-zinc-400">100% safe & secure</p>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="font-semibold text-orange-500">Fast Delivery</h3>
            <p className="mt-2 text-sm text-zinc-400">Get your order quickly</p>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="font-semibold text-orange-500">Easy Returns</h3>
            <p className="mt-2 text-sm text-zinc-400">30-day return policy</p>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="font-semibold text-orange-500">24/7 Support</h3>
            <p className="mt-2 text-sm text-zinc-400">We're here to help</p>
          </div>
        </div>
        <div className="mt-8 text-center">
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

export default Checkout;
