import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <i>Logo</i>
        <Link className="brand__name">CINEPOP</Link>
      </div>

      <ul className="navbar__links">
        <li className="navbar__links__item">
          <NavLink to="/" className="navbar__links__item__link " >
            Inicio
          </NavLink>
        </li>

        <li className="navbar__links__item">
          <NavLink to="cartelera" className="navbar__links__item__link" >
            Cartelera
          </NavLink>
        </li>

        <li className="navbar__links__item">
          <NavLink to="comidas" className="navbar__links__item__link" >
            Comidas
          </NavLink>
        </li>

        <li className="navbar__links__item">
          <NavLink to="/registro" className="navbar__links__item__link" >
            Registrarse
          </NavLink>
        </li>

        <li className="navbar__links__item">
          <NavLink to="login" className="navbar__links__item__link" >
            Login
          </NavLink>
        </li>
      </ul>

      <div>
        <input className="search" type="text" placeholder="Buscar" />
      </div>
    </nav>
  );
};
