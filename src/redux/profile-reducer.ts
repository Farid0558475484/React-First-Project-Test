import { profileAPI } from "../api/profile-api";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

let initialState = {
  posts: [
    { message: "Hi,My name Farid", id: 1, likesCount: 12 },
    { message: "How are you?", id: 2, likesCount: 11 },
    { message: "I'm fine", id: 3, likesCount: 11 },
  ] as Array<PostType>,

  profile: null as ProfileType | null,
  status: "",
  newPostText: "",
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;

const profilReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'SN/PROFILE/ADD_POST':
      let newPost = {
        id: 2,
        message: action.newPostText,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };

    case 'SN/PROFILE/SET_USER_PROFILE': {
      return { ...state, profile: action.profile };
    }
    case 'SN/PROFILE/SET_STATUS': {
      return { ...state, status: action.status };
    }
    case 'SN/PROFILE/DELETE_POST': {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case 'SN/PROFILE/SAVE_PHOTO_SUCCESS': {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }

    default:
      return state;
  }
};

export const actions = {
  addSignActionCreator: (newPostText: string) =>
    ({ type: 'SN/PROFILE/ADD_POST', newPostText } as const),
  setUserProfile: (profile: ProfileType) =>
    ({ type: 'SN/PROFILE/SET_USER_PROFILE', profile } as const),
  setStatus: (status: string) => ({ type: 'SN/PROFILE/SET_STATUS', status } as const),
  deletePost: (postId: number) => ({ type: 'SN/PROFILE/DELETE_POST', postId } as const),
  savePtohoSuccess: (photos: PhotosType) =>
    ({ type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos } as const),
};

export const getStatus =
  (userId: number): ThunkType =>
  async (dispatch) => {
    const data = await profileAPI.getStatus(userId);

    dispatch(actions.setStatus(data));
  };

export const updateStatus =
  (status: string): ThunkType =>
  async (dispatch) => {
    const data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
      dispatch(actions.setStatus(status));
    }
  };

export const savePhoto =
  (file: File): ThunkType =>
  async (dispatch) => {
    const data = await profileAPI.savePhoto(file);

    if (data.resultCode === 0) {
      dispatch(actions.savePtohoSuccess(data.data.photos));
    }
  };

export const getUserProfile =
  (userId: number): ThunkType =>
  async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
  };

export const saveProfile =
  (profile: ProfileType): ThunkType =>
  async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === 0) {
      if (userId != null) {
        dispatch(getUserProfile(userId));
      } else {
        throw new Error("userId can't be null");
      }
    }
  };

export default profilReducer;
