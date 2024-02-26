import {
    LOGIN_USER,
  } from "./actions_types.js";

export const LoginUser = (LoginUser) => {
    return {
      type: LOGIN_USER,
      payload: LoginUser,
    };
  };