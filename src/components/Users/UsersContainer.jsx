import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import React from "react";
import Preloader from "../Common/Preloader/Preloader";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items); 
        this.props.setTotalUsersCount(response.data.totalCount); 
      }); //получаем данные с сервера
  }

  onChangePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber); //передаем в пропсы номер страницы
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items); //передаем в пропсы массив пользователей
      }); //получаем данные с сервера
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> :
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onChangePage={this.onChangePage}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          users={this.props.users}
        />}
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

export default connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching })(UsersContainer);
