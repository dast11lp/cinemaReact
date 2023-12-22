import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "../components/layout/common/Home";
import { ListingMovies } from "../components/layout/common/ListingMovies";
import { Login } from "../components/layout/public/Login";
import { Register } from "../components/layout/public/Register";
import { Header } from "../components/layout/common/Header";
import { Food } from "../components/layout/common/Food";
import { FunctionsMovie } from "../components/layout/common/FunctionsMovie";
import { Chairs } from "../components/layout/common/Chairs"; 
import { Logout } from "../components/layout/private/LogOut";

export const Routing = () => {
  return (
    <BrowserRouter>
      <div className="layout">
        <Header />
        <div className="anyContent">
          <Routes>
            <Route path="" element={<Home />}>
              <Route path="login" element={<Login />} />
              <Route path="logout" element={<Logout />} />
              <Route path="cartelera" element={<ListingMovies />} />
              <Route path="registro" element={<Register />} />
              <Route path="comidas" element={<Food />} />
              <Route path="funciones/:id" element={<FunctionsMovie />} />
              <Route path="funcion/:id" element={<Chairs />} />
            </Route>

            <Route
              path="*"
              element={
                <>
                  <span>
                    <h1>Error 404</h1>
                    <Link to="/">Volver al Inicio</Link>
                  </span>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
