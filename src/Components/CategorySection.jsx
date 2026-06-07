import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

import watch from "../assets/images/watch.png";
import bag from "../assets/images/bag.png";
import pot from "../assets/images/pot.png";

const categories = [
  {
    title: "Gadgets",
    description: "Latest tech and smart devices",
    image: watch,
    link: "/category/gadgets",
  },
  {
    title: "Fashion",
    description: "Trendy styles for every occasion",
    image: bag,
    link: "/category/fashion",
  },
  {
    title: "Kitchenware",
    description: "Quality tools for your kitchen",
    image: pot,
    link: "/category/kitchenware",
  },
];

const CategorySection = () => {
  return (
    <section className="bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-orange-500">
            Shop by Category
          </h2>

          <Link
            to="/products"
            className="text-orange-500 transition hover:text-orange-400"
          >
            View all categories →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.title} to={category.link} className="block">
              <CategoryCard
                title={category.title}
                description={category.description}
                image={category.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
