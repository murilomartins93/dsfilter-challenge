import { Outlet } from "react-router-dom";
import FilterCard from "./FilterCard";
import ListingCard from "./ListingCard";

function ListingBody() {
  return (
    <main>
      <div className="dsf-container">
        <FilterCard />
        <ListingCard />
      </div>
    </main>
  );
}

export default ListingBody;
