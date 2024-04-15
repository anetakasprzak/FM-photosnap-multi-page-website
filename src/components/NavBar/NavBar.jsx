import Logo from "../Logo";
import "./NavBar.css";
import { links } from "../../Data";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Logo />
      <ul className="nav__links-box">
        {links.slice(1).map((obj) => {
          return (
            <li className="nav__link" key={obj.id}>
              <Link to={obj.href}>{obj.linkName}</Link>
            </li>
          );
        })}
      </ul>
      <button className="nav__btn">Get an invite </button>
      <svg
        className="nav__burger"
        width="20"
        height="6"
        viewBox="0 0 20 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="1" fill="black" />
        <rect y="5" width="20" height="1" fill="black" />
      </svg>
    </div>
  );
};

export default NavBar;
