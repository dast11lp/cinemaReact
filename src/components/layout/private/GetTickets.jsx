import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSeat, functionFetchMiddleware, setDesiredSeats, subtractSeat } from "../../../features/Function_/funtionSlice";
import { Link, useLocation, useParams } from "react-router-dom";

export const GetTickets = () => {

  const dispatch = useDispatch();
  const desiredTickets = useSelector((state) => state.function_.desiredTickets);
  const totalMount = useSelector((state) => state.function_.totalMount);

  const [isDisabled, setIsDisabled] = useState(true)

  const { id } = useParams();

  useEffect(() => {
    dispatch(functionFetchMiddleware(id));
  }, []);

  useEffect(()=> {
    if(desiredTickets > 0) setIsDisabled(false)
    else setIsDisabled(true)
    return () => {
      dispatch(setDesiredSeats(desiredTickets))
    }
  },[desiredTickets])

  return (
    <div className="how-many">
      <h2>¿Cuantas boletas deseas?</h2>
      <div className="how-many__content">
        <div className="remove" onClick={() => dispatch(subtractSeat())}>
          <FontAwesomeIcon icon={faCircleMinus} />
        </div>
        <span>{desiredTickets}</span>
        <div className="add" onClick={() => dispatch(addSeat())}>
          <FontAwesomeIcon icon={faCirclePlus} />
        </div>
      </div>
      <div className="how-many__total-price">
          <span>${totalMount}</span>
      </div>
      <div className="how-many__button-section">
        <Link to={isDisabled ? '#' : `/compras/funcion/seats/${id}`} className={`button ${isDisabled ? 'button--disabled' : '' }`}>Siguiente</Link>
      </div>
    </div>
  );
};
