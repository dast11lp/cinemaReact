import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ListingMovies } from "../components/layout/common/ListingMovies";
import { Login } from "../components/layout/public/Login";
import { Register } from "../components/layout/public/Register";
import { Header } from "../components/layout/common/Header";
import { Food } from "../components/layout/common/Food";
import { FunctionsMovie } from "../components/layout/common/FunctionsMovie";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../components/layout/common/Modal";
import { Function_ } from "../components/layout/private/Function_";
import { getLogin } from "../features/Auth/authSlice";
import { GetTickets } from "../components/layout/private/getTickets";
import { FunctionSeats } from "../components/layout/private/FunctionSeats";
import { PublicLayout } from "../components/layout/public/PublicLayout";
import { PrivateLayout } from "../components/layout/private/PrivateLayout";
import { MyReserves } from "../components/layout/private/MyReserves";
import { UniqueReserve } from "../components/layout/private/UniqueReserve";

export const Routing = () => {
  const dispatch = useDispatch();

  const modalSlice = useSelector((state) => state.modal.modalData);
  const modalOpen = modalSlice.open;

  useEffect(() => {
    dispatch(getLogin());
  }, []);

  return (
    <BrowserRouter>
      <div className="layout">
        <Header />
        <div className="anyContent">
          <Routes>
            <Route path="/" element={<PublicLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="cartelera" element={<ListingMovies />} />
              <Route path="registro" element={<Register />} />
              <Route path="comidas" element={<Food />} />
              <Route path="funciones/:id" element={<FunctionsMovie />} />
            </Route>

            <Route path="/compras" element={<PrivateLayout />}>
              <Route path="funcion/" element={<Function_ />}>
                <Route path="tickets/:id" element={<GetTickets />} />
                <Route path="seats/:id" element={<FunctionSeats />} />
              </Route>
            </Route>

            <Route path="/usuario" element={<PrivateLayout />}>
              <Route path="miscompras" element={<MyReserves />}>
                <Route path="reserva/:id" element= {<UniqueReserve />} />
              </Route>
            </Route>

            <Route
              path="*"
              element={
                <>
                  <span>
                    <h1>
                      <Link>Error 404</Link>
                    </h1>
                    <Link to="/">Volver al Inicio</Link>
                  </span>
                </>
              }
            />
          </Routes>
        </div>
        {modalOpen && <Modal />}
      </div>
    </BrowserRouter>
  );
};
