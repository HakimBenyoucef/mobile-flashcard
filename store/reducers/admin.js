import { UPDATE_ADMIN } from "../actions/admin";

export default isAdmin = (state = [], action) => {
  switch (action.type) {
    case UPDATE_ADMIN:
      return { ...state, isAdmin: action.isAdmin };

    default:
      return state;
  }
};
