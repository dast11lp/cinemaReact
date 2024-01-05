import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const PrivateLayout = () => {
  // const user = useSelector(state => state.auth.userLogin?.userData);
  const user  = localStorage.getItem("user")

  return <> {user ? <Outlet /> : <Navigate to="/login" replace={true} />}</>
};
