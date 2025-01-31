import { Link, useLocation } from "react-router-dom";
import navBarList from "./navBarList";

import s from "./NavBar.module.css";

const NavBar = () => {
  const currentPath = useLocation().pathname;
  console.log(currentPath);
  return (
    <nav className={s.navbar}>
      {navBarList.map((item) => (
        <Link
          key={item.id}
          className={
            currentPath === item.to ? s.active + " " + s.navLink : s.navLink
          }
          to={item.to}
        >
          {item.text}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
