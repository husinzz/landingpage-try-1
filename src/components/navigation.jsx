import brand from "../img/logo.svg";
import "./navigation.css";

export default function Navigation() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <img src={brand} alt="CrowTech Logo" height="75" />
        <div className="">
          <ul className="navbar-nav">
            <li className="nav-item">About</li>
            <li className="nav-item">Portfolio</li>
            <li className="nav-item">Product</li>
            <li className="nav-item">Support</li>
          </ul>
        </div>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
