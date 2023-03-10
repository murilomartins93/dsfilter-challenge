import ProductDetailCard from "../../ProductDetailCard";
import { ProductDTO } from "../../../models/Product";

type Props = {
  products: ProductDTO[];
};

function ListingCard({ products }: Props) {
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
