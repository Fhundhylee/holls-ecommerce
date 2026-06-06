import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-6 py-16 text-white">
      {/* Background Glow */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>

      {/* Glass Card */}
      <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        {/* Card Highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-white/5 via-transparent to-orange-500/5"></div>

        <div className="relative z-10">
          <h1 className="mb-2 text-center text-4xl font-bold text-orange-500">
            Create Account
          </h1>

          <p className="mb-8 text-center text-zinc-400">
            Join the HOLLS family
          </p>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none backdrop-blur-sm transition focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none backdrop-blur-sm transition focus:border-orange-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none backdrop-blur-sm transition focus:border-orange-500"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-orange-500 py-3 font-semibold transition hover:bg-orange-600"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-zinc-400">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
