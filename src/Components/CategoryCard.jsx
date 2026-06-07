import { Link } from "react-router-dom";

const CategoryCard = ({ title, description, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-r from-black to-zinc-950 transition-all duration-300 hover:border-orange-500">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>

          <p className="mb-6 text-zinc-400">{description}</p>

          <Link to={`/category/${title.toLowerCase()}`}>Shop Now →</Link>
        </div>

        <div className="absolute right-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl"></div>

        <img
          src={image}
          alt={title}
          className="h-44 w-auto object-contain transition-all duration-500 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
