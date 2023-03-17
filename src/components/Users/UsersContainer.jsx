import React from "react";
// import axios from "axios";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
} from "../../redux/users-reducer";

import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      }); //получаем данные с сервера
  }

  onChangePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber); //передаем в пропсы номер страницы
    this.props.toggleIsFetching(true);

    usersAPI.getUsers2(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items); //передаем в пропсы массив пользователей
    }); //получаем данные с сервера
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onChangePage={this.onChangePage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    );
  }
}
// import { getUsers } from "../../api/api";
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users, //передаем в пропсы массив пользователей
    pageSize: state.usersPage.pageSize, //передаем в пропсы размер страницы
    totalUsersCount: state.usersPage.totalUsersCount, //передаем в пропсы общее количество пользователей
    currentPage: state.usersPage.currentPage, //передаем в пропсы текущую страницу
    isFetching: state.usersPage.isFetching, //передаем в пропсы флаг загрузки
    followingInProgress: state.usersPage.followingInProgress,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber)); //передаем в пропсы номер страницы
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount)); //передаем в пропсы общее количество пользователей
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching)); //передаем в пропсы флаг загрузки
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
})(UsersContainer);
