import React from "react";
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss'

export const Pagination = () => {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => console.log(event)}
        pageRangeDisplayed={5}
        pageCount={8}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
