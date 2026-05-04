import { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("all");

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Shopping App</h1>

      <DarkModeToggle
        darkMode={darkMode}
        toggle={handleToggleDarkMode}
      />

      <select onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
      </select>

      <ProductList
        category={category}
        addToCart={handleAddToCart}
      />

      <Cart cart={cart} />
    </div>
  );
}

export default App;