import { Link, useLocation } from "react-router-dom";

import s from "./NavBar.module.css";

const NavBar = () => (
  <nav className={s.navbar}>
    <Link
      className={
        useLocation().pathname === "/" ? s.active + " " + s.navLink : s.navLink
      }
      to="/"
    >
      Home
    </Link>
    <Link
      className={
        useLocation().pathname === "/favorites"
          ? s.active + " " + s.navLink
          : s.navLink
      }
      to="/favorites"
    >
      Favorites
    </Link>
  </nav>
);

export default NavBar;
