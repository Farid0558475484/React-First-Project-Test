import React from "react";
import styles from "./Paginator.module.scss";

type PropsType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onChangePage: (pageNumber: number) => void;
};

const Paginator: React.FC<PropsType> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onChangePage,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  if (pages.length > 10) {
    pages = pages.slice(currentPage - 1, currentPage + 5);
  }

  return (
    <div className={styles.paginator}>
      {currentPage > 1 && (
        <button
          className={styles.btnPagination}
          onClick={() => onChangePage(currentPage - 1)}
        >
          Prev
        </button>
      )}
      {pages.map((p) => {
        return (
          <span
            key={p}
            className={currentPage === p ? styles.selectedPage : ""}
            onClick={(e) => {
              onChangePage(p);
            }}
          >
            {p}
          </span>
        );
      })}
      {currentPage < pagesCount && (
        <button
          className={styles.btnPagination}
          onClick={() => onChangePage(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Paginator;
