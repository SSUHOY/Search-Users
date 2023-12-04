import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export const Pagination = ({ onChangePage }) => {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={10}
        pageCount={9}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
