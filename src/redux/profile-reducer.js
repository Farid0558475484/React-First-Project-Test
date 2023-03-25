import { profileAPI } from "../api/api";


const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE-POST";

let initialState = {
  posts: [
    { message: "Hi,My name Farid", id: 1 },
    { message: "How are you?", id: 2 },
    { message: "I'm fine", id: 3 },
  ],

  profile: null,
  status: "",
};

const profilReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 2,
        message: action.newPostText,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };
    }

    default:
      return state;
  }
};

export const addSignActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getStatus = (userId) => async(dispatch) => {
  const response = await profileAPI.getStatus(userId)

    dispatch(setStatus(response.data));

};

export const updateStatus = (status) => async (dispatch) => {
  const response = await   profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }

};

export const deletePost = (postId) => ({
  type: "DELETE-POST",
  postId,
});

export default profilReducer;
