import { ShieldCheck, BadgeDollarSign, Truck, RefreshCcw } from "lucide-react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      {/* Trust Bar */}
      <section className="bg-black px-6 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-orange-500" size={34} />
            <div>
              <h3 className="font-semibold text-white">100% Authentic</h3>
              <p className="text-sm text-zinc-400">
                Sourced directly from brands
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <BadgeDollarSign className="text-orange-500" size={34} />
            <div>
              <h3 className="font-semibold text-white">Best Price Guarantee</h3>
              <p className="text-sm text-zinc-400">
                Find a lower price? We match it
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Truck className="text-orange-500" size={34} />
            <div>
              <h3 className="font-semibold text-white">
                Fast & Reliable Delivery
              </h3>
              <p className="text-sm text-zinc-400">
                Delivering happiness to you
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <RefreshCcw className="text-orange-500" size={34} />
            <div>
              <h3 className="font-semibold text-white">Easy Returns</h3>
              <p className="text-sm text-zinc-400">7-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="border-t border-zinc-800 bg-black px-6 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo */}
          <div>
            <img src={logo} alt="HOLLS" className="mb-4 w-40 object-contain" />

            <p className="text-sm leading-7 text-zinc-400">
              Shop more. Live better. Your one-stop destination for gadgets,
              fashion and quality kitchenware.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Shop</h3>

            <ul className="space-y-2 text-zinc-400">
              <li className="hover:text-orange-500 cursor-pointer">Gadgets</li>
              <li className="hover:text-orange-500 cursor-pointer">Fashion</li>
              <li className="hover:text-orange-500 cursor-pointer">
                Kitchenware
              </li>
              <li className="hover:text-orange-500 cursor-pointer">Deals</li>
              <li className="hover:text-orange-500 cursor-pointer">
                New Arrivals
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Customer Service</h3>

            <ul className="space-y-2 text-zinc-400">
              <li className="hover:text-orange-500 cursor-pointer">
                Track Order
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Returns & Refunds
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Shipping Policy
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-orange-500 cursor-pointer">FAQs</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>

            <ul className="space-y-2 text-zinc-400">
              <li className="hover:text-orange-500 cursor-pointer">About Us</li>
              <li className="hover:text-orange-500 cursor-pointer">Careers</li>
              <li className="hover:text-orange-500 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>

            <p className="mb-4 text-sm text-zinc-400">
              Subscribe to get updates on new arrivals and special offers.
            </p>

            <div className="flex overflow-hidden rounded-lg border border-zinc-700">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-3 text-sm outline-none"
              />

              <button className="bg-orange-500 px-5 hover:bg-orange-600">
                →
              </button>
            </div>

            <div className="mt-6 flex gap-3">
              <div className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold">
                Paystack
              </div>

              <div className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold">
                Flutterwave
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-zinc-800 pt-6 text-sm text-zinc-500 md:flex-row">
          <p>© 2026 HOLLS. All rights reserved.</p>

          <p>Built with ❤️ by Ibrahim Fuhad</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
