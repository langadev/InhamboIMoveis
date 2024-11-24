import Navbar from "./components/Navbar/Navbar";
import Filters from "./components/Filters/Filters";
import Products from "./components/Products/Products";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Filters />
      <div className="w-full mt-20">
        <Products />
      </div>
    </div>
  );
}
