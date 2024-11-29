import Navbar from "./components/Navbar/Navbar";
import Filters from "./components/Filters/Filters";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";

export default function App() {
  return (
    <div className="flex flex-col gap-3">
      <Navbar />
      <Banner/>
      <Filters />
        <Products />
      </div>
    
  );
}
