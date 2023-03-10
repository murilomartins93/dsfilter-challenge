import FilterCard from "./FilterCard";
import ListingCard from "./ListingCard";
import * as productService from "../../services/product-service";
import { useEffect, useState } from "react";

type Params = {
  minPrice: number;
  maxPrice: number;
};

function ListingBody() {
  const [params, setParams] = useState<Params>({
    minPrice: 0,
    maxPrice: Number.MAX_VALUE,
  });

  const [products, setProducts] = useState(
    productService.findByPrice(params.minPrice, params.maxPrice)
  );

  function handleFilter(params: Params) {
    console.log(params);
    setParams({
      ...params,
      minPrice: Number(params.minPrice) || 0,  // if not a number, 0
      maxPrice: Number(params.maxPrice) || Number.MAX_VALUE, // if not a number, MAX_VALUE
    });
  }

  useEffect(() => {
    console.log(params);
    setProducts(productService.findByPrice(params.minPrice, params.maxPrice));
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
