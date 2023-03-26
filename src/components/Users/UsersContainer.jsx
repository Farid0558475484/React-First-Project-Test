import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import AuthNavigate from "../HOC/AuthNavigate";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onChangePage = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
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
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state), //передаем в пропсы массив пользователей
    pageSize: getPageSize(state), //передаем в пропсы размер страницы
    totalUsersCount: getTotalUsersCount(state), //передаем в пропсы общее количество пользователей
    currentPage: getCurrentPage(state), //передаем в пропсы текущую страницу
    isFetching: getIsFetching(state), //передаем в пропсы флаг загрузки
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  AuthNavigate,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
  })
)(UsersContainer);
