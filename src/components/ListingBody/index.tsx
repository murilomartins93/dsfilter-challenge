import FilterCard from "./FilterCard";
import ListingCard from "./ListingCard";
import * as productService from "../../services/product-service";
import { useContext, useEffect, useState } from "react";
import { ContextProductCount } from "../../utils/context-count";

type Params = {
  minPrice: number;
  maxPrice: number;
};

function ListingBody() {
  const { setContextProductCount } = useContext(ContextProductCount);

  const [params, setParams] = useState<Params>({
    minPrice: 0,
    maxPrice: Number.MAX_VALUE,
  });

  const [products, setProducts] = useState(
    productService.findByPrice(params.minPrice, params.maxPrice)
  );

  function handleFilter(params: Params) {
    setParams({
      ...params,
      minPrice: Number(params.minPrice) || 0, // if not a number, 0
      maxPrice: Number(params.maxPrice) || Number.MAX_VALUE, // if not a number, MAX_VALUE
    });
  }

  useEffect(() => {
    const newProducts = productService.findByPrice(
      params.minPrice,
      params.maxPrice
    );
    setProducts(newProducts); // async function waits for response before updating;
    setContextProductCount(newProducts.length);
  }, [params]);

  return (
    <main>
      <div className="dsf-container">
        <FilterCard onFilter={handleFilter} />
        <ListingCard products={products} />
      </div>
    </main>
  );
}

export default ListingBody;
