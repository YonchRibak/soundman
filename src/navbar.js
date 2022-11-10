import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="title">
        יונתן ריבק <span>סאונדמן</span>{" "}
      </h1>
      <div className="links">
        <Link to="/order">הזמנה</Link>
        <Link to="/Recommendations">המלצות</Link>
      </div>
    </nav>
  );
};

export default Navbar;
