import { Link } from "react-router-dom";
import "../assets/CSS/navBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Ziad Matar</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
