import React from "react";
import styles from "./Users.module.scss";
import userPhoto from "./../../img/user.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(
    props.totalUsersCount / props.pageSize //округляем в большую сторону
  );
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i); //заполняем массив pages числами от 1 до pagesCount
  }

  if (pages.length > 10) {
    pages = pages.slice(props.currentPage - 1, props.currentPage + 5);
  }

  return (
    <div>
      <div className={styles.itemCount}>
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

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className={styles.photos}
                  src={u.photos.small != null ? u.photos.small : userPhoto} //если фото есть, то выводим его, если нет, то выводим userPhoto
                  alt="logo"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
