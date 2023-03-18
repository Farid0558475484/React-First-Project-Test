import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import AuthNavigate from "../HOC/AuthNavigate";




class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onChangePage = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
    users: state.usersPage.users, //передаем в пропсы массив пользователей
    pageSize: state.usersPage.pageSize, //передаем в пропсы размер страницы
    totalUsersCount: state.usersPage.totalUsersCount, //передаем в пропсы общее количество пользователей
    currentPage: state.usersPage.currentPage, //передаем в пропсы текущую страницу
    isFetching: state.usersPage.isFetching, //передаем в пропсы флаг загрузки
    followingInProgress: state.usersPage.followingInProgress,
  };
};


let withNavigate=AuthNavigate(UsersContainer)
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
})(withNavigate);
