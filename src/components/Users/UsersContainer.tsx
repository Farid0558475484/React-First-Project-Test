import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, requestUsers } from "../../redux/users-reducer";
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
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";
import { FilterType } from "../../redux/users-reducer";

type MapStatePropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
  filter: FilterType;
};

type MapDispatchPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  requestUsers: (
    currentPage: number,
    pageSize: number,
    filter: FilterType
  ) => void;
};

type OwnPropsType = {
  // pageTitle: string;
};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize, filter } = this.props;
    this.props.requestUsers(currentPage, pageSize, filter);
  }

  onChangePage = (pageNumber: number) => {
    const { pageSize, filter } = this.props;
    this.props.requestUsers(pageNumber, pageSize, filter);
  };

  onFilterChanged = (filter: FilterType) => {
    const { pageSize } = this.props;
    this.props.requestUsers(1, pageSize, filter);
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
            onFilterChanged={this.onFilterChanged}
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state), //передаем в пропсы массив пользователей
    pageSize: getPageSize(state), //передаем в пропсы размер страницы
    totalUsersCount: getTotalUsersCount(state), //передаем в пропсы общее количество пользователей
    currentPage: getCurrentPage(state), //передаем в пропсы текущую страницу
    isFetching: getIsFetching(state), //передаем в пропсы флаг загрузки
    followingInProgress: getFollowingInProgress(state),
    filter: state.usersPage.filter,
  };
};

export default compose(
  AuthNavigate,
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      follow,
      unfollow,
      requestUsers,
    }
  )
)(UsersContainer);
