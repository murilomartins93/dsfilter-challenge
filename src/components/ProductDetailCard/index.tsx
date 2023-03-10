import { ProductDTO } from "../../models/Product";
import "./styles.css";

type Props = {
  product: ProductDTO;
};

function ProductDetailCard({ product }: Props) {
  return (
    <div className="dsf-detail-card dsf-mt20">
      <h1>{product.name}</h1>
      <p>R$ {product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductDetailCard;
