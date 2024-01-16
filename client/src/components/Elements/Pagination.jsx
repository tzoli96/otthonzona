import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

function Pagination({ handlePageClick, pageCount }) {
  return (
    <div className="my-6 flex mx-auto justify-center items-center w-full md:w-10/12">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Következő"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="Előző"
        renderOnZeroPageCount={null}
        containerClassName="rounded-lg overflow-hidden flex"
        pageClassName="flex justify-center items-center h-12 w-12 text-center cursor-pointer p-2 font-semibold bg-gray-200 "
        activeClassName="bg-blue text-white"
        previousClassName="flex justify-center items-center h-12 w-24 text-center cursor-pointer p-2 font-semibold bg-gray-200 "
        breakClassName="flex justify-center items-center h-12 w-24 text-center cursor-pointer p-2 font-semibold bg-gray-200 "
        nextClassName="flex justify-center items-center h-12 w-24 text-center cursor-pointer p-2 font-semibold bg-gray-200 "
      />
    </div>
  );
}

export default Pagination;
