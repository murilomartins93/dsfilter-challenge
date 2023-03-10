import "./styles.css";
import { useState } from "react";

type Props = {
  onFilter: Function;
};

type Params = {
  minPrice?: number;
  maxPrice?: number;
};

function FilterCard({ onFilter }: Props) {
  
  const [params, setParams] = useState<Params>({});

  function handleSubmit(event: any) {
    event.preventDefault();
    onFilter(params);
  }

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setParams({ ...params, [name]: value });
  }

  return (
    <section id="filter-card">
      <form className="dsf-card dsf-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="minPrice"
          value={params.minPrice || ""}
          placeholder="Preço mínimo"
          className="dsf-form-box"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="maxPrice"
          value={params.maxPrice || ""}
          placeholder="Preço máximo"
          className="dsf-form-box"
          onChange={handleInputChange}
        />
        <button type="submit" className="dsf-form-box">
          Filtrar
        </button>
      </form>
    </section>
  );
}

export default FilterCard;
