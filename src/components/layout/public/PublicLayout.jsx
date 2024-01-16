import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { setPreviousPage } from "../../../features/PreviousPath/previousPathSlice";
import { useState } from "react";

export const PublicLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [previousPageTwo, setPreviousPageTwo] = useState();

  useEffect(() => {
    // console.log("me ejecuto en el publico???? ", location.pathname);
    setPreviousPageTwo(location.pathname);
    dispatch(setPreviousPage(previousPageTwo));
  }, [location.pathname]);

  return <Outlet />;
};
