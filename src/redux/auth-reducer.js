import { authAPI } from "../api/api";
import { securityAPI } from "../api/api";
const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const SET_CAPTCHA_URL = "social-network/auth/SET_CAPTCHA_URL";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.payload.captchaUrl,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const setCaptchaUrl = (captchaUrl) => ({
  type: SET_CAPTCHA_URL,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe,captcha);

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    alert(response.data.messages);
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(setCaptchaUrl(captchaUrl));
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
