import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-primary text-white p-3 d-flex justify-content-between align-items-center">
      <h1 className="h4">E-Commerce</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link text-white">
              Products
            </Link>
          </li>
          <li className="nav-item"><a href="#" className="nav-link text-white">Partners</a></li>
          <li className="nav-item">
            <Link to="/contactUs" className="nav-link text-white">
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
