import CategoryCard from "./CategoryCard";

import watch from "../assets/images/watch.png";
import bag from "../assets/images/bag.png";
import pot from "../assets/images/pot.png";

const categories = [
  {
    title: "Gadgets",
    description: "Latest tech and smart devices",
    image: watch,
  },
  {
    title: "Fashion",
    description: "Trendy styles for every occasion",
    image: bag,
  },
  {
    title: "Kitchenware",
    description: "Quality tools for your kitchen",
    image: pot,
  },
];

const CategorySection = () => {
  return (
    <section className="bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Shop by Category</h2>

          <button className="text-orange-500 hover:text-orange-400">
            View all categories →
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              image={category.image}
            />
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
