import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { clearDesiredSeats } from "../../../features/Function_/funtionSlice";
import { useDispatch, useSelector } from "react-redux";

export const Function_ = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(clearDesiredSeats());
    };
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};
