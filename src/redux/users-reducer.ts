import { Dispatch } from "react";
import { usersAPI } from "../api/api";
import { UserType } from "../types/types";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";
import { InferActionsTypes } from "./redux-store";

let initialState = {
  users: [] as Array<UserType>, //массив пользователей
  pageSize: 10, //количество пользователей на странице
  totalUsersCount: 1, //общее количество пользователей
  currentPage: 1, //текущая страница
  isFetching: true,
  followingInProgress: [] as Array<number>, //массив пользователей, которые сейчас подписываются
};

type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;

const usersReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case "SET_USERS":
      return {
        ...state,
        users: action.users,
      };

    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case "SET_TOTAL_USERS_COUNT":
      return {
        ...state,
        totalUsersCount: action.count,
      };

    case "TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case "TOGGLE_IS_FOLLOWING_PROGRESS":
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const actions = {
  followSuccess: (userId: number) =>
    ({
      type: "FOLLOW",
      userId,
    } as const),
  unfollowSuccess: (userId: number) =>
    ({
      type: "UNFOLLOW",
      userId,
    } as const),
  setUsers: (users: Array<UserType>) =>
    ({
      type: "SET_USERS",
      users,
    } as const),
  setCurrentPage: (currentPage: number) =>
    ({
      type: "SET_CURRENT_PAGE",
      currentPage,
    } as const), //добавили
  setTotalUsersCount: (totalUsersCount: number) =>
    ({
      type: "SET_TOTAL_USERS_COUNT",

      count: totalUsersCount,
    } as const), //добавили
  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: "TOGGLE_IS_FETCHING",
      isFetching,
    } as const), //добавили
  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: "TOGGLE_IS_FOLLOWING_PROGRESS",
      isFetching,
      userId,
    } as const), //добавили'
};

type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;

export const requestUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));
    const data = await usersAPI.getUsers(page, pageSize);

    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  };
};

export const follow = (userId: number): ThunkType => {
  return async (dispatch: any) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      actions.followSuccess
    );
  };
};

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch: any) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      actions.unfollowSuccess
    );
  };
};
const followUnfollowFlow = async (
  dispatch: DispatchType,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => ActionsTypes
) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toggleFollowingProgress(false, userId));
};

export default usersReducer;
