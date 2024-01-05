import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { setLogOut } from "../../../features/Auth/authSlice";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  const location = useLocation()

  const [OpenMenu, setOpenMenu] = useState(false);

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
        <div className="navbar__nav__left">
          <div className="navbar__nav__left__brand">
            {/* <svg></svg> */}
            <Link className="navbar__nav__left__brand__name" to="/">
              CinePop
            </Link>
          </div>
          <div className="navbar__nav__left__navlinks">
            <ul className="navbar__nav__left__navlinks__links">
              <li className="navbar__nav__left__navlinks__links__li">
                <NavLink className="navbar__nav__left__navlinks__links__li__link" to="/">Inicio</NavLink>
              </li>
              <li className="navbar__nav__left__navlinks__links__li">
                <NavLink className="navbar__nav__left__navlinks__links__li__link" to="/cartelera">Cartelera</NavLink>
              </li>
              <li className="navbar__nav__left__navlinks__links__li">
                <NavLink className="navbar__nav__left__navlinks__links__li__link" to="/comidas">Comidas</NavLink>
              </li>
              {!user && 
              <li className="navbar__nav__left__navlinks__links__li">
                <NavLink className="navbar__nav__left__navlinks__links__li__link" to="/registro">Registrarse</NavLink>
              </li>}
            </ul>
          </div>
        </div>

        <div className="navbar__nav__right">
          {user ? (
            <div className="navbar__nav__right__user">
              <div className="navbar__nav__right__user__button" onClick={() => setOpenMenu(!OpenMenu)} >
                <img src="asdasd.img" alt="user" />
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={`navbar__nav__right__user__menu ${ OpenMenu && "active-menu" }`} >
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
    </div>
  );
};
