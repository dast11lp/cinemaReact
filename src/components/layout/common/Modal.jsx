import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../features/Modal/modalSlice";
import { capitalize } from "../../../helpers/helpers";

export const Modal = () => {
  const dispatch = useDispatch();
  const modalSlice = useSelector(state => state.modal.modalData)

  const closeModal = () => {
    dispatch(setModal({
      type: undefined,
      message: undefined,
      open: false,
    }));
  };

  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__box__close-button" onClick={closeModal}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
        <div className="modal__box__content">
          <h2>{capitalize(modalSlice.type)} </h2>
          <p>{modalSlice.message}</p>
        </div>
      </div>
    </div>
  );
};
