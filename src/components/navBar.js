import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/navBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Ziad Matar</Link>
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/experience" onClick={() => setMenuOpen(false)}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="/education" onClick={() => setMenuOpen(false)}>
            Education
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/courses" onClick={() => setMenuOpen(false)}>
            Courses
          </Link>
        </li>
        <li>
          <Link to="/skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
