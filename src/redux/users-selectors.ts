import { AppStateType } from "./redux-store";

const getUsersSelector = (state: AppStateType) => {
  return state.usersPage.users;
};

const getUsers = (state: AppStateType) => {
  return state.usersPage.users.filter((u) => true);
};
const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize;
};
const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount;
};
const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage;
};
const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching;
};
const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress;
};

const getFilter = (state: AppStateType) => {
  return state.usersPage.filter;
};


export {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
  getUsersSelector,
  getFilter,
};
