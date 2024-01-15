import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../features/Modal/modalSlice";
import { Link, useNavigate } from "react-router-dom";
import { removeIdSeats, reserveFetchMiddleware, setIdSeats } from "../../../features/Function_/funtionSlice";

export const Modal = () => {
  const dispatch = useDispatch();
  const modalSlice = useSelector((state) => state.modal.modalData);

  const navigate = useNavigate();

  const closeModal = () => {
    dispatch(
      setModal({
        type: undefined,
        title: undefined,
        message: undefined,
        open: false, 
      })
    );
  };

  const selectSeat = () => {
    dispatch(setIdSeats(modalSlice.others))
    closeModal()
  }

  const addSeat = () => {
    dispatch(removeIdSeats(modalSlice.others))
    closeModal()
  }

  const  removeSeats = () =>{
    dispatch(reserveFetchMiddleware(modalSlice.others.reservationDetails));
    closeModal()
    navigate("/compras/funcion/purchaseSummary")
  }

  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__box__close-button" onClick={closeModal}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
        <div className="modal__box__content">
          <h2>{modalSlice.title} </h2>
          <p>{modalSlice.message}</p>
        </div>
        <div className="modal__button-section">
          {modalSlice.type == "info" ? <Link className="button">Aceptar</Link>: '' }
          {modalSlice.type == "addSeat" ? <button className="button button--secundary" onClick={selectSeat}>Aceptar</button>: '' }
          {modalSlice.type == "remove" ? <button className="button button--secundary" onClick={addSeat}>Remover</button>: '' }
          {modalSlice.type == "reserve" ? <button className="button button--secundary" onClick={removeSeats}>Comprar</button>: '' }
          <button className="button button--reject" onClick={closeModal}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};
