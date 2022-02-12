import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";
export default function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink to="/converter" className={s.link}>
        Converter
      </NavLink>
      <NavLink to="/currency-exchange" className={s.link}>
        Currency Exchange
      </NavLink>
    </nav>
  );
}
