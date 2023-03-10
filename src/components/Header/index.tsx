import "./styles.css";
import { useContext } from "react";
import { ContextProductCount } from "../../utils/context-count";

function Header() {

  const { contextProductCount } = useContext(ContextProductCount);

  return (
    <header className="dsf-header">
      <nav className="dsf-nav dsf-container">
        <div className="dsf-header-title">
          <h1>DSFilter</h1>
        </div>
        <div className="dsf-nav-counter">
          <h1>{contextProductCount} produto(s)</h1>
        </div>
      </nav>
    </header>
  );
}

export default Header;
