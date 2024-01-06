import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { setLogOut } from "../../../features/Auth/authSlice";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  const location = useLocation()

  const [OpenUserMenu, setOpenUserMenu] = useState(false);
  const [OpenNavMenu, setOpenNavMenu] = useState(false);

  const user = useSelector((state) => state.auth.userLogin?.userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(setLogOut());
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar__nav">
        <div className="navbar__nav">
          <div className="navbar__nav__brand">
            {/* <svg></svg> */}
            <Link className="navbar__nav__brand__name" to="/">
              CinePop
            </Link>
          </div>
          <div className="navbar__nav__navlinks ">
            <div className="navbar__nav__navlinks__menu-burger" onClick={() => {setOpenNavMenu(!OpenNavMenu)}}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <ul className={`navbar__nav__navlinks__links ${OpenNavMenu && "active-menu-2"}`} >
              <li className="navbar__nav__navlinks__links__li">
                <NavLink className="navbar__nav__navlinks__links__li__link" to="/">Inicio</NavLink>
              </li>
              <li className="navbar__nav__navlinks__links__li">
                <NavLink className="navbar__nav__navlinks__links__li__link" to="/cartelera">Cartelera</NavLink>
              </li>
              <li className="navbar__nav__navlinks__links__li">
                <NavLink className="navbar__nav__navlinks__links__li__link" to="/comidas">Comidas</NavLink>
              </li>
              {!user && 
              <li className="navbar__nav__navlinks__links__li">
                <NavLink className="navbar__nav__navlinks__links__li__link" to="/registro">Registrarse</NavLink>
              </li>}
            </ul>
          </div>
          <div className="navbar__nav__userbox ">
            {user ? (
            <div className="navbar__nav__user">
              <div className="navbar__nav__user__button" onClick={() => setOpenUserMenu(!OpenUserMenu)} >
                <img src="" alt="user" />
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={`navbar__nav__user__menu ${ OpenUserMenu && "active-menu" }`} >
                <Link onClick={logOut} to="#"> Cerrar Sesión </Link>
              </div>
            </div>
          ) : (
            <Link to="/login" className={`button ${location.pathname == "/" &&"button--secundary"}`}>
              Iniciar Sesión
            </Link>
          )}
          </div>
        </div>

        {/* <div className="navbar__nav">
          {user ? (
            <div className="navbar__nav__user">
              <div className="navbar__nav__user__button" onClick={() => setOpenUserMenu(!OpenUserMenu)} >
                <img src="" alt="user" />
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={`navbar__nav__user__menu ${ OpenUserMenu && "active-menu" }`} >
                <Link onClick={logOut} to="#"> Cerrar Sesión </Link>
              </div>
            </div>
          ) : (
            <Link to="/login" className={`button ${location.pathname == "/" &&"button--secundary"}`}>
              Iniciar Sesión
            </Link>
          )}
        </div> */}
      </div>
    </div>
  );
};
