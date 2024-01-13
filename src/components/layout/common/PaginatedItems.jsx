import React, { useEffect, useState } from "react";
import { UniqueReserve } from "../private/UniqueReserve";
import ReactPaginate from "react-paginate";
import { getReservationByPagesMiddleware } from "../../../features/UniqueReserve/uniqueReserveSlice";
import { useDispatch, useSelector } from "react-redux";

export const PaginatedItems = ({ itemsPerPage }) => {
  
  const dispatch = useDispatch();
  const reservations = useSelector(
    (state) => state.reservation.reservations
  );
  const { first, last, totalElements } = useSelector(
    (state) => state.reservation.reservations
  );

  const items = reservations.content ? reservations.content :[];


    console.log(reservations)
  ///////////////////////////////

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;


//   const currentItems = items.slice(itemOffset, endOffset);
  const currentItems = items.slice(0, 1);
  const pageCount = Math.ceil(totalElements / itemsPerPage);
  

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % totalElements;
    setItemOffset(e.selected + 1 );
  };


//   const [itemOffset, setItemOffset] = useState(0);
//   const endOffset = itemOffset + itemsPerPage;


//   const currentItems = items.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(items.length / itemsPerPage);

//   const handlePageClick = (e) => {
//     const newOffset = (e.selected * itemsPerPage) % items.length;
//     setItemOffset(newOffset);
//   };


 

  useEffect(() => {
        dispatch(getReservationByPagesMiddleware(itemOffset));
  }, [itemOffset]);

  return (
    <>
      {/* <UniqueReserve currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
      <UniqueReserve currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
