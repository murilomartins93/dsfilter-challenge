import "./styles.css";

function FilterCard() {
  return (
    <section id="filter-card">
      <form className="dsf-card dsf-form">
        <input
          type="text"
          name="minPrice"
          placeholder="Preço mínimo"
          className="dsf-form-box"
        />
        <input
          type="text"
          name="maxPrice"
          placeholder="Preço máximo"
          className="dsf-form-box"
        />
        <button type="submit" className="dsf-form-box">
          Filtrar
        </button>
      </form>
    </section>
  );
}

export default FilterCard;
