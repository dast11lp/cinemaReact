import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { setLogOut } from "../../../features/Login/authSlice";

export const Navbar = () => {

  const login = useSelector((state)=> state.auth.login)

  const dispatch = useDispatch()

  const logOut= () => {
    dispatch(setLogOut())
  }

  return (
    <nav className="navbar">
      <div className="brand">
        <i>Logo</i>
        <Link className="brand__name">CINEPOP</Link>
      </div>

      <ul className="navbar__links">
        <li className="navbar__links__item">
          <NavLink to="/" className="navbar__links__item__link ">
            Inicio
          </NavLink>
        </li>

        <li className="navbar__links__item">
          <NavLink to="cartelera" className="navbar__links__item__link">
            Cartelera
          </NavLink>
        </li>

        <li className="navbar__links__item">
          <NavLink to="comidas" className="navbar__links__item__link">
            Comidas
          </NavLink>
        </li>

        {!login ? (
          <>
            <li className="navbar__links__item">
              <NavLink to="registro" className="navbar__links__item__link">
                Registrarse
              </NavLink>
            </li>

            <li className="navbar__links__item">
              <Link to="login" className="button button--nav">
                Login
              </Link>
            </li>
          </>
        ) : (
          <li className="navbar__links__item">
            {/* <NavLink  className="button button--nav" onClick={logOut}> */}
            <button  className="button button--nav" onClick={logOut}>
              Logout
            </button>
          </li>
        )}
      </ul>

      <div>
        <input className="search" type="text" placeholder="Buscar" />
      </div>
    </nav>
  );
};
