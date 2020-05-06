import { UPDATE_DECKS } from "../actions/decks";

export default decks = (state = [], action) => {
  switch (action.type) {
    case UPDATE_DECKS:
      return { ...state, decks: action.decks };

    default:
      return state;
  }
};
