import { FC } from "react";
import styles from "./Users.module.scss";
import userPhoto from "./../../img/user.png";
import { NavLink } from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";
import { UserType } from "../../types/types";

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onChangePage: (pageNumber: number) => void;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

const Users: FC<PropsType> = (props) => {
  return (
    <div>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onChangePage={props.onChangePage}
      />
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className={styles.photos}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
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
