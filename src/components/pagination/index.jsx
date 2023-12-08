import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export const Pagination = ({ onChangePage, currentPage, data }) => {
  const [pages, setPages] = useState(1);

  useEffect(() => {
    let pages = Math.ceil(data / 10);

    if (pages > 100) {
      let pages = 99;
      return setPages(pages);
    } else if (pages < 100) {
      return setPages(pages);
    }
  }, [data]);

  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={10}
        pageCount={pages}
        previousLabel="<"
        initialPage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </>
  );
};
