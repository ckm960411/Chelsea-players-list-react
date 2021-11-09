import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
  return (
    <div className="navbar">
      <div className="navbar__nav">
        <img
          src="../../images/chelsea-logo.png"
          alt="chelsea-logo"
          className="chelsea-logo"
        />
        <ul className="navLinks">
          <li className="navLink">
            <Link to="/">Home</Link>
          </li>
          <li className="navLink">
            <Link to="/players">Players</Link>
          </li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="search here..." />
        <button className="searchBtn">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Navigation;
