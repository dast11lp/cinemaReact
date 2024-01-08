import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { getReservationIdsMiddleware } from "../../../features/UniqueReserve/uniqueReserveSlice";

export const MyReserves = () => {
  const userId = useSelector((state) => state.auth.userLogin?.userData?.idUser);
  const listReservationIds = useSelector(
    (state) => state.reservation.idReservations
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getReservationIdsMiddleware(userId));
    }
  }, [userId]);


  if (listReservationIds.length > 0) {
    return (
      <div className="my-reserves">
        <h2>Mis Compras</h2>
        <nav className="my-reserves__purchase-navbar">
          <ul className="my-reserves__purchase-navbar__ul">
            {listReservationIds.map((el, i) => (
              <li className="my-reserves__purchase-navbar__ul__li" key={i}>
                <Link to={`reserva/${el}`}className="my-reserves__purchase-navbar__ul__li__link">{el}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  } else {
    return <>loading...</>;
  }
};
