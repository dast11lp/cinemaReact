import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  
  clearSlice,
  functionFetchMiddleware,
  reserveFetchMiddleware,
} from "../../../features/Function_/funtionSlice";
import { setModal } from "../../../features/Modal/modalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";

export const FunctionSeats = () => {
  const function_ = useSelector((state) => state.function_.function_);
  const reservationDetails = useSelector(
    (state) => state.function_.reservationDetails
  );

  const selectedSeats = useSelector((state) => state.function_.selectedSeats);

  const howManySelectedSeats = useSelector(
    (state) => state.function_.numSelectedSeats
  );
  const chairs = function_?.functionChairs;

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(functionFetchMiddleware(id));
    return () => {
      dispatch(clearSlice());
    }
  }, []);

  useEffect(() => {}, [selectedSeats]);


  const askForSeat = (available, idSeat) => {
    if (available) {
      if (selectedSeats.includes(idSeat)) {
        dispatch(
          setModal({
            type: "remove",
            title: "Remover elección",
            message: "¿Desea quitar el asiento de su lista de reservas?",
            open: true,
            others: {
              idSeat,
            },
          })
        );
      } else {
        dispatch(
          setModal({
            type: "reserve",
            title: "Reservar",
            message: "¿Desea reservar este asiento?",
            open: true,
            others: {
              idSeat,
            },
          })
        );
      }
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


  const reserve = () => {
    dispatch(reserveFetchMiddleware(reservationDetails));
  };

  return (
    <div className="function-seats">
      <div className="function-seats__content">
        <div className="custom-section">Tickets: {howManySelectedSeats}</div>
        <div className="chairs">
          {chairs?.map((el, i) => (
            <div
              className={`chairs__chair chairs__chair--${
                !chairs[i].available ? "reserved" : "not-reserved"
              } ${
                selectedSeats.includes(chairs[i].id)
                  ? "chairs__chair--selected"
                  : ""
              }`}
              key={i}
              onClick={() => askForSeat(chairs[i].available, chairs[i].id)}
            >
              <FontAwesomeIcon icon={faCouch} className="chairs__chair__icon" />
              <span className="chairs__chair__number">{el.id}</span>
            </div>
          ))}
        </div>
      </div>
      <button className="button" onClick={reserve}>
        Comprar Tickets
      </button>
    </div>
  );
};
