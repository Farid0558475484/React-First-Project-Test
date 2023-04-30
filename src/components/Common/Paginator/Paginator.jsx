import React from "react";
import styles from "./Paginator.module.scss";

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  if (pages.length > 10) {
    pages = pages.slice(props.currentPage - 1, props.currentPage + 5);
  }

  return (
    <div className={styles.paginator}>
      {props.currentPage > 1 && (
        <button
          className={styles.btnPagination}
          onClick={() => props.onChangePage(props.currentPage - 1)}
        >
          Prev
        </button>
      )}
      {pages.map((p) => {
        return (
          <span
            key={p}
            className={props.currentPage === p ? styles.selectedPage : ""}
            onClick={(e) => {
              props.onChangePage(p);
            }}
          >
            {p}
          </span>
        );
      })}
      {props.currentPage < pagesCount && (
        <button
          className={styles.btnPagination}
          onClick={() => props.onChangePage(props.currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Paginator;
