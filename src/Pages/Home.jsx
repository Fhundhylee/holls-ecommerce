import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import CategorySection from "../Components/CategorySection";
import ProductGrid from "../Components/ProductGrid";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <CategorySection />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Home;
