import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";
import Products from "./Pages/Products";
import CategoryPage from "./Pages/CategoryPage";
import Deals from "./Pages/Deals";
import NewArrivals from "./Pages/NewArrivals";
function App() {
  return (
    <div className="min-h-screen bg-black pt-36 md:pt-32">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
      </Routes>
    </div>
  );
}

export default App;
