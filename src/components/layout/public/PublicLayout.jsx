import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PublicLayout = () => {
  const auth = useSelector((state) => state.auth.userLogin);

  // return <>{!auth ? <Outlet /> : <Navigate to=""/>}</>;
  return <Outlet />
};
