export const UPDATE_DECKS = "UPDATE_DECKS";

export const updateDecks = (decks) => {
  return {
    type: UPDATE_DECKS,
    decks,
  };
};
