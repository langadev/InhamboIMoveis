import { products } from "../../../utils/data";
import ProductCard from './ProductCard';

function Products() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-6">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          url={item.url}
          alt={item.alt}
          price={item.price}
          description={item.description}
          quartos= {item.quartos}
          banheiros={item.banheiros}
        />
      ))}
    </div>
  );
}

export default Products;
