import {LOGIN_USER} from "./actions/actions_types.js";
  
  const initialState = {
    user: null,
  };
  
  const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOGIN_USER:
      return { ...state, user: payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  