import React from "react";
import styles from "./Users.module.scss";
import userPhoto from "./../../img/user.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
              {u.followed ?
               (
                <button
                disabled={props.followingInProgress.some(id => id === u.id)}

                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "58d03910-01e0-4118-a2a4-f0078c7c10fc",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });

       
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "58d03910-01e0-4118-a2a4-f0078c7c10fc",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
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
              {/* <div>{u.location.country}</div>
                  <div>{u.location.city}</div> */}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
