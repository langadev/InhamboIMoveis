import { products } from "../../../utils/data";
import ProductCard from './ProductCard';

function Products() {
  return (
    <div className="grid grid-cols-3 gap-4 px-16">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          url={item.url}
          alt={item.alt}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Products;
