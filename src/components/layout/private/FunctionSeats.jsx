import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearDesiredSeats, functionFetchMiddleware } from "../../../features/Function_/funtionSlice";
import { setModal } from "../../../features/Modal/modalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";

export const FunctionSeats = () => {
  const function_ = useSelector((state) => state.function_.function_);
  const chairs = function_?.functionChairs;

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(functionFetchMiddleware(id));
  }, []);

  const requestReservation = (available) => {
    if (available) {
      dispatch(
        setModal({
          type: "info",
          title: "Reservar",
          message: "¿Desea reservar este asiento?",
          open: true,
        })
      );
    } else {
      dispatch(
        setModal({
          type: "warr",
          title: "Asiento ocupado",
          message: "Este asiento se encuentra reservado.",
          open: true,
        })
      );
    }
  };

  return (
    <div className="chairs">
      {chairs?.map((el, i) => (
        <div className={`chairs__chair chairs__chair--${!chairs[i].available ? "reserved" : "not-reserved"}`}
          key={i}
          onClick={() => requestReservation(chairs[i].available)}
        >
          <FontAwesomeIcon icon={faCouch} className="chairs__chair__icon" />
          <span className="chairs__chair__number">{el.numberChair}</span>
        </div>
      ))}
    </div>
  );
};
