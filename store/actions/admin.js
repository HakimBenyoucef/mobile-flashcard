export const UPDATE_ADMIN = "UPDATE_ADMIN";

export const updateAdmin = (isAdmin) => {
  return {
    type: UPDATE_ADMIN,
    isAdmin,
  };
};
