import ProductDetailCard from "../../ProductDetailCard";
import * as productService from "../../../services/product-service";
import { useState } from "react";

function ListingCard() {
  const [products, setProducts] = useState(
    productService.findByPrice(0, 20000)
  );

  return (
    <section id="listing">
      <div className="dsf-card">
        {products.map((product) => (
          <ProductDetailCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ListingCard;
