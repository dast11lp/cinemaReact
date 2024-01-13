import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { UniqueReserve } from "./UniqueReserve";
import { PaginatedItems } from "../common/PaginatedItems";


export const MyReserves = () => {


  let { number } = useSelector((state) => state.reservation.reservations);

  return (
    <div className="my-reserves">
      <h2>Mis Compras</h2>
      {/* <Outlet /> */}
      <PaginatedItems itemsPerPage={1} />
    </div>
  );
};
